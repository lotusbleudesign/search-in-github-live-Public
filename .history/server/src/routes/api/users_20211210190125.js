import { request, response, Router } from "express";
import { PrismaClient } from '@prisma/client';
require('dotenv').config();

const api = Router(),
    prisma = new PrismaClient(),
    GitHub = require('github-api'),
    myToken = process.env.USER_TOKEN,
    gh = new GitHub({ token: myToken });

api.get("/search", async (request, response) => {
    const login = request.query.login.toLowerCase();
    var user = null
    try {
        user = await prisma.user.findUnique({
            where: {
                login: login
            }
        })

    } catch { }

    if (user == null) {
        //Need to fetch user data from github
        var userRequester = gh.getUser(login);
        let profile = null

        try {
            profile = await userRequester.getProfile();
        } catch (e) {
            response.status(500).json({
                error: "Cannot retreive github user:" + login,
                message: e.message
            });
            //console.log("return");
            return;
        }

        user = profile.data

        const repos = await userRequester.listRepos();

        // profile need to be added in DB
        const postUser = await prisma.user.create(
            //{ data: user }
            {
                data: {
                    ...user,
                    login: user.login.toLowerCase()
                }
            }
        )
        if (!postUser) {
            response.error()
        }

        // repos need to be added in DB
        // Fields need to be filter before adding in DB
        let allowedRepoProperties = ['repos_id', 'id', 'node_id', 'name', 'full_name', 'private', 'language', 'html_url', 'created_at', 'updated_at', 'pushed_at']
        let dbRepos = []

        for (let element of repos.data) {
            let repo = Object.fromEntries(Object.entries(element).filter(entrie => allowedRepoProperties.includes(entrie[0])))
            Object.assign(repo, {
                // user_id: postUser.user_id,
                user: {
                    connect: { user_id: postUser.user_id } // PK->FK
                }
            })

            dbRepos.push(repo)
        }

        var creates = []
        for (let dbRepo of dbRepos) {
            creates.push(prisma.repos.create({ data: dbRepo }))
        }
        let ret = await Promise.all(creates)
        //console.log(ret)
        if (!ret) {
            response.error()
            return
        }
    }
    response.header("Access-Control-Allow-Origin", "*");
    response.status(200).json({
        user: user
    });
    console.log("search response", response)
});


api.get("/listUsers/", async (request, response) => {

    try {
        const users = await prisma.user.findMany()
        if (users) {
            //console.log("==> ", users)
            response.status(200).json({ users: users })
        }
    } catch (e) {
        console.log(e)
    }

})

async function countRepos() {
    let countRep = await prisma.repo.findMany({
        include: {
            _count: {
                select: {
                    repos_id: true
                }
            }
        }

    )

}

export default api;
