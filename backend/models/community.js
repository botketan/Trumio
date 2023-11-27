import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
  // schema of post model
  title: {
    type: String,
    required: true,
    },
  userId: {
    type: String,
    required: true,
    },
  isPublished: {
    type: Boolean,
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

export const community = mongoose.model("community", communitySchema);
