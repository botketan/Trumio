import express from "express";
const router = express.Router();

import { getById } from "../controllers/post.js"

router.get("/postid",getById);

export default router;