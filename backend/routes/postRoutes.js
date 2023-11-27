import express from "express";
const router = express.Router();

import { getbyparent } from "../controllers/post.js";

router.post("/getbyparent", getbyparent);

export default router;