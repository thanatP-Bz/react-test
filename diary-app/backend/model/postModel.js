import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    post: String,
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
