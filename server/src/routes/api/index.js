import express, { Router} from "express";
import users from "./users";

const api = Router();

// api.get("/", (req, res) => {
//     if(res){
//         console.log("ok")
//     }
// });


// on any request to /users, run the following
api.use("/users", users);

export default api;
