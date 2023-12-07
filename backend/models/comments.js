import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
        username: {
            type: String,
        },
        position: {
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
          position: {
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
});

export const comments = mongoose.model("comments", commentsSchema);
