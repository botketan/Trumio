import express from "express";
import { updatePost } from "../controllers/post";
import {create} from "../controllers/post.js"
import { getByCommunity,getbyparent,getById,deletePost } from "../controllers/post.js";


const router = express.Router();

router.put("/update", updatePost);
router.post("/getbyparent", getbyparent);
router.get("/postid",getById);
router.get("/community",getByCommunity);
router.delete("/", deletePost);
router.post('/create',create);


export default router;