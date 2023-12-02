import express from "express";
const router = express.Router();
import {createProject} from "../controllers/projects.js"

router.post("/createProject", createProject);

export default router;