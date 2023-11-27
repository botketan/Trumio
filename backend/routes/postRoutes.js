import express from "express";
import { getByCommunity,getbyparent,getById,deletePost,updatePost,create,published } from "../controllers/post.js";


const router = express.Router();

router.put("/update", updatePost);
router.post("/getbyparent", getbyparent);
router.post("/postid",getById);
router.get("/community",getByCommunity);
router.delete("/", deletePost);
router.post('/create',create);
router.post('/publish', published);


export default router;