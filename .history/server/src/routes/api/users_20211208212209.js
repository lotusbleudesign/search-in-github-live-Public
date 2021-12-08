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
        const profile = await userRequester.getProfile();
        const repos = await userRequester.listRepos();

        if (!profile) {
            response.status(500).json({
                error: "login not exists",
            });
            return;
        }
        user = profile.data
        //console.log("profile : ", user, "repos: ", repos)

        //profile need to be added in DB
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
        console.log("repos.data", repos.data)

        for (let element of repos.data) {
            let repo = Object.assign({}, element)
            let allowedRepoProperties = ['repos_id', 'id', 'node_id', 'name', 'full_name', 'private', 'owner', 'language', 'html_url', 'created_at', 'updated_at', 'pushed_at']
            Object.fromEntries(Object.entries(repo).filter(([key]) => allowedRepoProperties.includes(key)));
        }


        repos.data.forEach(async element => {
            // console.log("==> ", element);
            const listRepos = await prisma.repos.create(
                {
                    data: {

                        user: {
                            connect: { // PK->FK
                                login: element.owner.login.toLowerCase()
                            }
                        },
                    }
                }
            )
            if (!listRepos) {
                response.error()
            }
        });

    }

    response.status(200).json({
        user: user
    });
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
export default api;
