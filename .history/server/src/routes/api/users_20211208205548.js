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
        repos.data.forEach(async element => {
            //console.log("==> ", element);
            const listRepos = await prisma.repos.create(
                {
                    data: {

                        repos_id: element.repos_id,
                        user: {
                            connect: { // PK->FK
                                login: element.owner.login.toLowerCase()
                            }
                        },
                        id: element.id,
                        node_id: element.node_id,
                        name: element.name,
                        full_name: element.full_name,
                        private: element.private,
                        owner: element.owner,
                        language: element.language,
                        html_url: element.html_url,
                        created_at: element.created_at,
                        updated_at: element.updated_at,
                        pushed_at: element.pushed_at,
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
