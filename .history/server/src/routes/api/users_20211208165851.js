import { request, response, Router } from "express";
import { PrismaClient } from '@prisma/client';

require('dotenv').config();
const myToken = process.env.USER_TOKEN

const api = Router(),
    prisma = new PrismaClient(),
    GitHub = require('github-api'),
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
        let postRepo = repos.data.forEach(async element => {
            try {
                const listRepos = await prisma.repos.create(
                    {
                        data: {
                            repos_id: element.repos_id,
                            id: element.id,
                            node_id: element.node_id,
                            name: element.name,
                            full_name: element.full_name,
                            private: element.private,
                            language: element.language,
                            created_at: element.created_at,
                            updated_at: element.updated_at,
                            pushed_at: element.pushed_at,
                        }
                    }
                )
            } catch (e) {
                response.error()
            }
        });

        if (user && postRepo) {
            response.status(200).json({
                user: user
            });
        }
    }

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