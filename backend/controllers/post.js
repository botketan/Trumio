import { user } from "../models/user.js";
import { post } from "../models/post.js";

export const create=async(req,res)=>{
    const {title,userId,parentPost,community}=req.body;
    try{
        const userExisted=await user.findOne({userId});
        if(userExisted){
            const newPost= await post.create({userId,parentPost,community});
            return res.status(200).json({newPost});
        }
    }catch(e){
        console.log(e)
    }
}