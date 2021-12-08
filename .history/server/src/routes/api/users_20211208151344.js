import { request, response, Router } from "express";
import { PrismaClient } from '@prisma/client';

require('dotenv').config();
const myToken = process.env.USER_TOKEN

const api = Router(),
    prisma = new PrismaClient(),
    GitHub = require('github-api'),
    gh = new GitHub({ token: myToken });

api.get("/search", async (request, response) => {

    const { login } = request.query;
    var user = null
    //console.log("login:", login)

    try {
        user = await prisma.user.findUnique({
            where: {
                login: login
            }
        })
    } catch { }

    if (user == null) {

        requester()

        // //Need to fetch user data from github
        // var userRequester = gh.getUser(login);
        // const profile = await userRequester.getProfile();
        // if (!profile) {
        //     response.status(500).json({
        //         error: "login not exists",
        //     });
        //     return;
        // }

        // user = profile.data
        //console.log("profile : ", user)
        //profile need to be added in DB
        // const post = await prisma.user.create(
        //     { data: user }
        // )
        // if (!post) {
        //     response.error()
        // }
    }

    // response.status(200).json({
    //     user: user,
    // });
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

// // Resquest to gitHub API
function requester() {


    //Need to fetch user data from github
    var userRequester = gh.getUser(login);
    const profile = userRequester.getProfile();

    if (!profile) {
        response.status(500).json({
            error: "login not exists",
        });
        return;
    } else {
        user = profile.data
        console.log("profile : ", user)
    }
}
// PUSH Repos https://api.github.com/users/lotusbleudesign/repos
// Where id =
export default api;