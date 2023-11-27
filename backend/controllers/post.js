import { user } from "../models/user.js";
import { post } from "../models/post.js";


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
  const post_id = req.params.id;
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
    post.find({parentPost:post_id},function(err,docs){
      if(err){
          console.log(err);
      }
      else{
          docs.forEach(function(doc){
              deletePostRecursive(doc._id);
              console.log(doc._id);
          })
      }})
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
    const { parentDocument } = req.body.parentDocument ;
  
    const userId = req.body.userid;
  
    const documents = await post.find({
      parentDocument,
    })
    const newArray=documents.filter((document)=>{
        document.userId===userId || document.isPublished;
    })
    
    res.send(newArray);
  };

export const getById = async (req,res) =>{
    const {postId,userId}=req.body;
    const data = await post.findById({postId});
    if (data.isPublished || data.userId===userId){
        res.status(200).send(data);
    }
}
export const getByCommunity = async (req,res) =>{
    const {communityID } = req.body;
    const data = await post.find({community:communityID,parentPost:NULL});
    res.status(200).send(data);
}

