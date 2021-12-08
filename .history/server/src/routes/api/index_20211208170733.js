import { Router } from "express";
import users from "./users";

const api = Router();

// if (user && postRepo) {
//   response.status(200).json({
//       user: user
//   });
// }
api.use("/users", users);
export default api;
