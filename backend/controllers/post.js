import { user } from "../models/user.js";
import { post } from "../models/post.js";


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

