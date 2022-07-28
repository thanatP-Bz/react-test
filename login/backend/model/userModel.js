import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.statics.signup = async function (email, password) {};

export default mongoose.model("User", UserSchema);
