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
});

export const user = mongoose.model("user", userSchema);
