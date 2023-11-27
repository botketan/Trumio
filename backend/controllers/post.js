import { user } from "../models/user.js";
import { post } from "../models/post.js";

export const updatePost=asyncHandler(async(req,res)=>{
    const Post=await post.findById(req.params.id);
    if(!Post){
        res.status(404);
        throw new Error("Post not found");
    }
    const updatedPost=await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedPost);
});