import express from "express";
const router = express.Router();

import { login,signup,getUser } from "../controllers/user.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/getUser", getUser);

export default router;