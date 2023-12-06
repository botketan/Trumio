import express from "express";
const router = express.Router();
import {createProject,updateProject} from "../controllers/projects.js"

router.post("/createProject", createProject);
router.post("/updateProject", updateProject);

export default router;