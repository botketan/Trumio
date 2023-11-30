import { community } from "../models/community.js";
import { user } from "../models/user.js";
import { chatchannel } from "../models/chatchannel.js";
import { post } from "../models/post.js";

export const createCommunity = async (req, res) => {
    const { title} = req.body;
    if(!title){
        return res.status(400).send("Title is required");
    }
    const newCommunity = new community({
        title
    });
    if(!req.body.user_id){
        return res.status(400).send("User id is required");
    }
    newCommunity.userAdmins.push(req.body.user_id);
    if(req.body.islocal){
        newCommunity.islocal = true;
    }
    await newCommunity.save();
    return res.status(201).json({ message: "Community created successfully" });
};

export const getCommunity = async (req, res) => {
    const { community_id } = req.body;
    const communityget = await community.findById(community_id).populate("chatsChannel");
    if (!communityget) {
        return res.status(404).send("Community not found");
    }
    return res.status(200).json({ communityget });
};

export const createChatChannel = async (req, res) => {
    const { community_id,user_id } = req.body;
    const communityget = await community.findById(community_id );
    if (!communityget) {
        return res.status(404).send("Community not found");
    }
    let bool = false;
    for(let i=0;i<communityget.userAdmins.length;i++){
        if(communityget.userAdmins[i].equals(user_id)){
            bool = true;
            break;
        }
    }
    if(!bool){
        return res.status(401).send("User is not admin");
    }
    const newChatChannel = new chatchannel({});
    await newChatChannel.save();
    communityget.chatsChannel.push(newChatChannel._id);
    await communityget.save();
    return res.status(201).json({ message: "Chat Channel created successfully" });
};

export const createPostChannel = async (req, res) => {
    const { community_id,user_id } = req.body;
    const communityget = await community.findById(community_id );
    if (!communityget) {
        return res.status(404).send("Community not found");
    }
    let bool = false;
    for(let i=0;i<communityget.userAdmins.length;i++){
        if(communityget.userAdmins[i].equals(user_id)){
            bool = true;
            break;
        }
    }
    if(!bool){
        return res.status(401).send("User is not admin");
    }
    const newPostChannel = new post({userId:user_id,community:community_id});
    await newPostChannel.save();
    communityget.postChannels.push(newPostChannel._id);
    await communityget.save();
    return res.status(201).json({ message: "Post Channel created successfully" });
};
