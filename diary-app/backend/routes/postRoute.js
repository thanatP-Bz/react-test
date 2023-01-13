import express from "express";
const router = express.Router();

import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controller/postController.js";

router.route("/").get(getPost);
router.route("/create").post(createPost);
router.route("/update/:id").patch(updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;
