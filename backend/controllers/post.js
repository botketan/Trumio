import { user } from "../models/user.js";
import { post } from "../models/post.js";


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
    const {userId,parentPost,community}=req.body;
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

