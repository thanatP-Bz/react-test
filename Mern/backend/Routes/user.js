import express from "express";
const router = express.Router();

import { loginUser, signupUser } from "../controller/userController.js";

//login route
router.route("/login").post(loginUser);

//signup Route
router.route("/signup").post(signupUser);

export default router;
