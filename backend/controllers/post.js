import { user } from "../models/user.js";
import { post } from "../models/post.js";

export const getByCommunity = async (req,res) =>{
    const {communityID } = req.body;
    const data = await post.find({community:communityID,parentPost:NULL});
    res.status(200).send(data);
}