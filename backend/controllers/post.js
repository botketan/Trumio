import { user } from "../models/user.js";
import { post } from "../models/post.js";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import streamifier from "streamifier";


cloudinary.config({ 
    cloud_name: 'dymzmlh4w', 
    api_key: '138446594816435', 
    api_secret: 'MrM28Qo0PuyyBxqpZ5YhptB2_FI' 
  });

export const updatePost=async(req,res)=>{
    const Post=await post.findById(req.body.id);
    if(!Post){
        res.status(404).send("Post not found");
    }
    if (req.body.content) Post.content = req.body.content;
    if (req.body.coverImage) Post.coverImage = req.body.coverImage;
    if (req.body.icon) Post.icon = req.body.icon;
    if (req.body.title) Post.title = req.body.title;
    await Post.save();
    res.status(200).json(Post);
};


export const deletePost = async (req, res) => {
  const post_id = req.body.id;
  try {
    await deletePostRecursive(post_id);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  return res.status(200).json({ message: "Post deleted successfully" });
}

const deletePostRecursive = async (post_id) => {
    const postget = await post.findById(post_id);
    if (!postget) {
      throw new Error("Post not found");
    }
    const posts = await post.find({parentPost:post_id})
    posts.forEach(element => {
        deletePostRecursive(element._id);
        console.log(element._id);
    });
    await post.findByIdAndDelete(post_id);
}


export const create=async(req,res)=>{
    const {userId,community}=req.body;
    const parentPost = req.body.parentPost;

    try{
        const userExisted=await user.findById(userId);
        if(userExisted){
            const newPost= new post({userId,parentPost,community});
            await newPost.save();
            return res.status(200).json({newPost});
        } else {
            return res.status(400);
        }
    }catch(e){
        console.log(e)
    }
}

export const getbyparent = async (req, res) => {
    const { parentId} = req.body ;
    const parent = await post.findById(parentId)
    const userId = req.body.userid;
  
    const documents = await post.find({
      parentPost:parent._id
    })
    const newArray=documents.filter((document)=>{
        document.userId.equals(userId) || document.isPublished;
    })
    
    res.send(newArray);
  };

export const getById = async (req,res) =>{
    const {postId,userId}=req.body;
    const data = await post.findById(postId);
    if (!data) {
        res.status(404).send("Post not found.");
        return;
    }
    if (data.isPublished || data.userId.equals(userId)){
        res.status(200).send(data);
    }
}
export const getByCommunity = async (req,res) =>{
    const {communityId} = req.body;
    const data = await post.find({community:communityId,parentPost:null});
    res.status(200).send(data);
}


export const published = async(req,res)=>{
    const  {postId} = req.body;

    const update = await post.findById(postId)
    if(!update) {
        res.status(404).send("Post not found");
        return;
    }
    update.isPublished = true;
    update.contentPublished = update.content;
    await update.save();
    res.status(200).json({update});
}


export const uploadCoverImage = async (req, res) => {
    const { postId } = req.body;
    const file = req.file;
    const postUpdate = await post.findById(postId);
    if (!postUpdate|| !file) {
      res.status(404).send("Post not found or file not present");
      return;
    }
    let cld_upload_stream = cloudinary.uploader.upload_stream(
          
        async (error,result) =>{
            if(error){
                console.log(error);
                return res.status(400).json({error});
            }
           postUpdate.coverImage = result.secure_url;
           await postUpdate.save();
           return res.status(200).json(postUpdate);
       }
       );
   
    streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
};

export const uploadIcon = async (req, res) => {
    const { postId } = req.body;
    const file = req.file;
    const postUpdate = await post.findById(postId);
    if (!postUpdate|| !file) {
      res.status(404).send("Post not found or file not present");
      return;
    }
    let cld_upload_stream = cloudinary.uploader.upload_stream(
          
        async (error,result) =>{
            if(error){
                console.log(error);
                return res.status(400).json({error});
            }
           postUpdate.icon = result.secure_url;
           await postUpdate.save();
           return res.status(200).json(postUpdate);
       }
       );
   
    streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
};