import express from "express";
import { getByCommunity,
    getbyparent,
    getById,
    getByUserId,
    deletePost,
    updatePost,
    create,
    published,
    uploadCoverImage,
    uploadIcon } from "../controllers/post.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.put("/update", updatePost);
router.post("/getbyparent", getbyparent);
router.post("/postid",getById);
router.post("/community",getByCommunity);
router.delete("/", deletePost);
router.post('/create',create);
router.post('/publish', published);
router.post('/getByUserId', getByUserId);
router.post('/uploadCover', upload.single('file'),uploadCoverImage);
router.post('/uploadIcon', upload.single('file'),uploadIcon);


export default router;