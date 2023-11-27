import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  // schema of post model
  title: {
    type: String,
    required: true,
    },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `user`,
    required: true,
    },
  isPublished: {
    type: Boolean,
    required: true,
    },
  parentPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `post`,
    required: true,
    },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `community`,
    required: true,
    },
  content: {
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
