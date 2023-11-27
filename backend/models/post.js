import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  // schema of post model
  title: {
    type: String,
    default:"Untitled",
    },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `user`,
    required: true,
    default:null
    },
  isPublished: {
    type: Boolean,
    required: true,
    default:false
    },
  parentPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `post`,
    default:null
    },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `community`,
    required: true
    },
  content: {
    type: String,
    },
  contentPublished: {
      type: String,
      },
  coverImage: {
    type: String,
    },
  icon: {
    type: String,
    },
});

export const post = mongoose.model("post", postSchema);
