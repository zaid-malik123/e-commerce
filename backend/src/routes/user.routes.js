import express from "express"
import { isAuth } from "../middlewares/isAuth.js";
import { currUser } from "../controllers/user.controllers.js";
const router = express();

router.get("/curr-user", isAuth, currUser)


export default router