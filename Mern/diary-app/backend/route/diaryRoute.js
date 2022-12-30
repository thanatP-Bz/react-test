import express from "express";
import { getPost, createPost } from "../controller/diaryModel.js";
const router = express.Router();

router.route("/").get(getPost);
router.route("/").post(createPost);

export default router;
