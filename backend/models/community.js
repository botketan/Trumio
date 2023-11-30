import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
  // schema of post model
  title: {
    type: String,
    required: true,
    },
  islocal: {
    type: Boolean,
    default:false,
    },
  userAdmins: [
    {
      type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: `user`,
    }
  ],
  coverImage: {
    type: String,
    },
  icon: {
    type: String,
    },
  chatsChannel: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: `chatchannel`,
    required: true
  }],
  postChannels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: `post`,
    required: true
  }],
});

export const community = mongoose.model("community", communitySchema);
