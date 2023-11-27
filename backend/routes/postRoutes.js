import express from "express";
import { updatePost } from "../controllers/post";

const router = express.Router();
router.put("/update", updatePost);


export default router;