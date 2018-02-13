import express from "express";
import * as postController from "../controllers/post.server.controller";

const router = express.Router();

router
  .route("/")
  .get(postController.getPosts)
  .post(postController.addPost)
  .put(postController.updatePost);

router
  .route("/:id")
  .get(postController.getPost)
  .delete(postController.deletePost);

export default router;
