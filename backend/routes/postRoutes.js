import express from "express";
const router = express.Router();

import {deletePost} from "../controllers/posts.js";

router.delete("/", deletePost);

export default router;