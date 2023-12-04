import express from "express";
const router = express.Router();
import { createChat,postChat, postHelper} from "../controllers/ciaTest.js";

router.post("/createChat", createChat);
router.post("/postChat", postChat);
router.post("/posthelper",postHelper);

export default router;