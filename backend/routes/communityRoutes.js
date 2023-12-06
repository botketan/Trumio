import express from "express";
const router = express.Router();

import { createChatChannel,createPostChannel,createCommunity,getCommunity,publishPost, getCommunityByUserId } from "../controllers/community.js";

router.post("/createChatChannel", createChatChannel);
router.post("/createPostChannel", createPostChannel);
router.post("/createCommunity", createCommunity);
router.post("/getCommunity", getCommunity);
router.post("/publish",publishPost);
router.post("/getByUserId",getCommunityByUserId);

export default router;