import { Router } from "express";
import { PrismaClient } from '@prisma/client';


require('dotenv').config();
const myToken = process.env.USER_TOKEN

const   api = Router(),
        prisma = new PrismaClient(),
        request = require('request'),
        GitHub = require('github-api'),
        gh = new GitHub( {
        token: myToken
        }
        );


api.get("/search", async (request, response) => {

    const {login} = request.params;
    var user = null

    try{
        user = await prisma.user.findUnique({
            where: {
                login: login
            }
        })
    } catch {}

    // if not found
    if ( user == null ) {
        // Need to fetch user data from github
        var userRequester = gh.getUser(login);
        const profile = await userRequester.getProfile();
        if ( !profile ) {
          response.status(500).json({
              error: "login not exists",
          });
          return;
        }
        user = profile.data
console.log("profile",user)
        // profile need to be added in DB
        const post = await prisma.user.create(
            { data: user }
        )
        if(!post){
            response.error()
        }
    }

    response.status(200).json({
        user: user,
    });
});

export default api;
