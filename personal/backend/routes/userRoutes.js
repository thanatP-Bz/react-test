import express from "express";
const router = express.Router();

import { login, signup } from "../controller/userController.js";

router.route("/login").post(login);

router.route("/signup").post(signup);

export default router;
