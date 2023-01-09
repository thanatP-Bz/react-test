import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  post: {
    type: String,
  },
  timeStamp: true,
});

export default mongoose.model("diarySchema", diarySchema);
