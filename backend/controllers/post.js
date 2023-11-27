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