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