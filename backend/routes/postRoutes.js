import express from "express";
const router = express.Router();
import { getByCommunity } from "../controllers/post.js";

import { getById } from "../controllers/post.js"

router.get("/postid",getById);
router.get("/community",getByCommunity);

export default router;