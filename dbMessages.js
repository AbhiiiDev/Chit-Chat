import mongoose from "mongoose";

const chitchatSchema=mongoose.Schema({
    message:String,
    name:String, 
    timestamp:String, 
    
})
export default mongoose.model("messageContent",chitchatSchema);