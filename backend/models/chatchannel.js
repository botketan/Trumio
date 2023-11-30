import mongoose from "mongoose";

const chatchannelSchema = mongoose.Schema({
  // schema of content model
  messages: 
    [
        {
            message: {
                type: String,
                required: true,
            },
            timestamp: {
                type: String,
                required: true,
            },
            user: {
                type: String,
                required: true,
            },
        }
    ]
    ,
});

export const chatchannel = mongoose.model("chatchannel", chatchannelSchema);
