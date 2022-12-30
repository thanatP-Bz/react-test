import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  post: {
    type: String,
  },
});

export default mongoose.model("diarySchema", diarySchema);
