import express from "express";
const router = express.Router();

import { createChatChannel,createPostChannel,createCommunity,getCommunity } from "../controllers/community.js";

router.post("/createChatChannel", createChatChannel);
router.post("/createPostChannel", createPostChannel);
router.post("/createCommunity", createCommunity);
router.post("/getCommunity", getCommunity);

export default router;