import express from "express"
import { adminLogin, googleLogin, login, logout, signup } from "../controllers/auth.controllers.js";
const router = express();

router.post("/signup", signup)

router.post("/login", login)

router.get("/logout", logout)

router.post("/google-login", googleLogin);

router.post("/admin-login", adminLogin);


export default router