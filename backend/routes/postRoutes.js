import express from "express";
const router = express.Router();
import { getByCommunity } from "../controllers/post.js";

router.get("/community",getByCommunity);

export default router;