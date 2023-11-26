import express from "express";
const router = express.Router();
import { createChat,postChat } from "../controllers/ciaTest.js";

router.post("/createChat", createChat);
router.post("/postChat/:id", postChat);

export default router;