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
    },
  isPublished: {
    type: Boolean,
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
    comments: [
        {
            username: {
                type: String,
            },
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: `user`,
            },
            icon: {
                type: String,
            },
            content: {
                type: String,
            },
            likes: {
                type: Number,
                default: 0,
            },
            reply: [{
                username: {
                  type: String,
              },
              userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: `user`,
              },
              icon: {
                  type: String,
              },
              content: {
                  type: String,
              },
              likes: {
                  type: Number,
                  default: 0,
              },
            }]
        }
    ],
    likes: {
      type: Number,
      default: 0,
    },
});

export const post = mongoose.model("post", postSchema);
