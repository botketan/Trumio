import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      },
    userName: {
        type: String,
      },
    name: {
        type: String,
      },
    position: {
        type: String,
    },
    college: {
        type: String,
    },
    icon: {
        type: String,
      },
    description: {
        type: String,
      },
    skills: [
        {
          type: String,
          enum: ['Development', 'Design', 'Marketing', 'Business', 'Data Science', 'Other']
        }
      ],
    points: {
        type: Number,
        default: 0
      },
    sparks: {
        type: Number,
        default: 0
      },
    badges: [
        {
          type: String
        }
      ],
    projects: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'project'
        }
      ],
      chatIds:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'chats'
        }
      ]
});

export const user = mongoose.model("user", userSchema);
