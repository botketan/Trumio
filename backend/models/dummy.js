import mongoose from "mongoose";

const dummyModelSchema = mongoose.Schema({
  // schema of content model
  content: {
    // storing the content scraped
    type: String,
    required: true,
    },
});

export const dummyModel = mongoose.model("dummyModel", dummyModelSchema);
