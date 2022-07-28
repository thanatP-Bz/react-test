import express from "express";
const router = express.Router();

//user controller
import { signup, login } from "../controller/userController.js";

//sign up route
router.route("/signup").post(signup);

//login route
router.route("/login").post(login);

export default router;
