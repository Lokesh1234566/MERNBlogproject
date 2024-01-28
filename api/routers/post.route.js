import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  crcreate,
  deletepost,
  getposts,
  updateposteate,
} from "../controllers/post.controller.js";
router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;
