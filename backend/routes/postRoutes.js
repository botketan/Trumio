import express from "express";
import {create} from "../controllers/post"
const router = express.Router();


router.post('/create',create);
export default router;