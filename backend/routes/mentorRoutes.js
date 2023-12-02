import express from "express";
import multer from "multer";
const router = express.Router();
import { createMentor,getMentor,getMentorById,updateIcon } from "../controllers/mentor.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", upload.single('file'),createMentor);
router.post("/updateIcon", upload.single('file'),updateIcon);
router.post("/get", getMentor);
router.post("/getById", getMentorById);

export default router;