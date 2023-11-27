import { user } from "../models/user.js";
import { post } from "../models/post.js";

<<<<<<< HEAD
export const getById = async (req,res) =>{
    const {postId,userId}=req.body;
    const data = await post.findById({postId});
    if (data.isPublished || data.userId===userId){
        res.status(200).send(data);
    }
    
=======
export const getByCommunity = async (req,res) =>{
    const {communityID } = req.body;
    const data = await post.find({community:communityID,parentPost:NULL});
    res.status(200).send(data);
>>>>>>> deec25d5f810be82256a68a7eb96781739d1ec16
}