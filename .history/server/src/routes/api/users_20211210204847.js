import { request, response, Router } from "express";
import { PrismaClient } from '@prisma/client';
require('dotenv').config();

const api = Router(),
    prisma = new PrismaClient(),
    GitHub = require('github-api'),
    myToken = process.env.USER_TOKEN,
    gh = new GitHub({ token: myToken });

api.get("/search", async (request, response) => {
    const login = request.query.login.toLowerCase().trim();
    if (!login) {
        return response.status(400).json({
            error: "Login is required"
        });
    }

    var user = await prisma.user.findUnique({
        where: {
            login: login
        }
    })

    if (user == null) {
        //Need to fetch user data from github
        var userRequester = gh.getUser(login);
        let profile = null


        profile = await userRequester.getProfile().catch((e) => {
            return response.status(500).json({
                error: "Cannot retreive github user:" + login,
                message: e.message
            });
        })

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
            return response.error()
        }
    }

    response.status(200).json({
        user: user
    });
    // console.log("search response", response)
});


api.get("/listUsers/", async (request, response) => {
    const users = await prisma.user.findMany().catch((e) => {
        console.log(e)
    })
    if (users) {
        //console.log("==> ", users)
        response.status(200).json({ users: users })
    }
})

api.get("/repos", async (request, response) => {
    const login = request.query.login.toLowerCase();
    let countRep = await prisma.user.findUnique({
        select: {
            repos: {
                select: {
                    name: true
                },
            },
            _count: {
                select: { repos: true },
            }
        },
        where: {
            login: login
        }
    })

    response.status(200).json(countRep);
})
export default api;
