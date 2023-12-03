import mongoose from "mongoose";

const chatsSchema = mongoose.Schema({
    botname:{
        type:String
    },
  // schema of content model
  messages: [{
    // storing the content scraped
    role:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    }}],
});
const chats =mongoose.model("chats", chatsSchema);
export default chats ;
