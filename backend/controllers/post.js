import { user } from "../models/user.js";
import { post } from "../models/post.js";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import streamifier from "streamifier";
import { comments } from "../models/comments.js";


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

  function traverse(blocks){
    let s ="";
    if (Array.isArray(blocks) && blocks.length) {
      blocks.map((block)=>{
        console.log(block);
        if(block.content)
        {
          block.content.forEach((content) => {
            s+=content.text +" ";
          });
        }
        s+= traverse(block.children);
      });
      return s;
    }
    return "";
  
  }

export const updatePost=async(req,res)=>{
    const Post=await post.findById(req.body.id);
    if(!Post || Post.isPublished){
        return res.status(404).send("Post not found or already published");
    }
    if (req.body.content) Post.content = req.body.content;
    if (req.body.coverImage) Post.coverImage = req.body.coverImage;
    if (req.body.icon) Post.icon = req.body.icon;
    if (req.body.title) Post.title = req.body.title;
    if(req.body.content) Post.stringContent = traverse(JSON.parse(req.body.content));
    if(req.body.parentId) Post.parentPost = req.body.parentId;
    try{
        await Post.save();
        res.status(200).json(Post);
    }
    catch(e){
        console.log(e);
        return res.status(400).send("Error");
    }
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
    try{
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
    return res.status(200).json({ message: "Post deleted successfully" }); 
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
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
    try{
    const { parentId} = req.body ;
    const parent = await post.findById(parentId)
    const userId = req.body.userid;
  
    const documents = await post.find({
      parentPost:parent._id
    })
    const newArray=documents.filter((document)=>{
        document.userId.equals(userId) || document.isPublished;
    })
    
    return res.status(200).send(newArray);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
  };

export const getById = async (req,res) =>{
    const {postId,userId}=req.body;
    const data = await post.findById(postId).populate("comments");
    if (!data) {
        res.status(404).send("Post not found.");
        return;
    }
    if (data.isPublished || data.userId.equals(userId)){
        return res.status(200).send(data);
    }
    else
    {
        return res.status(401).send("Unauthorized");
    }
}
export const getByCommunity = async (req,res) =>{
    try{
    const {communityId} = req.body;
    const data = await post.find({community:communityId,parentPost:null, isPublished:true});
    res.status(200).send(data);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
}


export const published = async(req,res)=>{
    try{
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
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
}


export const uploadCoverImage = async (req, res) => {
    try{
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
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const uploadIcon = async (req, res) => {
    try{
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
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const getByUserId = async (req,res) =>{
    try{
    const {userId} = req.body;
    const userExisted=await user.findById(userId);
    if(!userExisted){
        return res.status(404).send("User not found");
    }
    const data = await post.find({userId:userExisted._id});
    res.status(200).json(data);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const comment = async (req,res) =>{
    try{
    const {postId,userId,content} = req.body;
    const userExisted=await user.findById(userId);
    if(!userExisted){
        return res.status(404).send("User not found");
    }
    const postExisted=await post.findById(postId);
    if(!postExisted){
        return res.status(404).send("Post not found");
    }
    const newComment = new comments({userId,content,username:userExisted.userName,icon:userExisted.icon,position:userExisted.position});
    postExisted.comments.push(newComment._id);
    await newComment.save();
    await postExisted.save();
    return res.status(200).json(postExisted);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const reply = async (req,res) =>{
    try{
    const {userId,content,commentId} = req.body;
    const userExisted=await user.findById(userId);
    if(!userExisted){
        return res.status(404).send("User not found");
    }
    const commentExisted=await comments.findById(commentId);
    if(!commentExisted){
        return res.status(404).send("Comment not found");
    }
    const newReply = {userId,content,username:userExisted.userName,icon:userExisted.icon,position:userExisted.position};
    commentExisted.reply.push(newReply);
    await commentExisted.save();
    return res.status(200).json("replied");
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const getAllPosts = async (req,res) =>{
    try{
    const {userId} = req.body;
    const userExisted=await user.findById(userId);
    const data = await post.find({});
    const data2 = data.filter((d)=>{
        let bool = false;
        userExisted.communityIds.forEach((c)=>{
            if(c.equals(d.community)){
                bool = true;
            }
        })
        if(bool&&d.isPublished){
            return d;
        }
    })
    res.status(200).json(data2);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};