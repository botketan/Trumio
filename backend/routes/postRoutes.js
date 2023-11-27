import express from "express";
import {create} from "../controllers/post.js"
const router = express.Router();
import { getByCommunity } from "../controllers/post.js";
import { getbyparent } from "../controllers/post.js";
import { getById } from "../controllers/post.js"

router.post("/getbyparent", getbyparent);
router.get("/postid",getById);
router.get("/community",getByCommunity);


router.post('/create',create);
export default router;