import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
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

//create token
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.SECRET, {
    expiresIn: "30d",
  });
};

UserSchema.statics.signup = async function (email, password) {
  //check email and password
  if (!email || !password) {
    throw Error("please provide all value");
  }

  //check if email exist
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("This email has already in use ");
  }

  //check validation
  if (!validator.isEmail(email)) {
    throw Error("email is not valid");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//login user
UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  //check email and password
  if (!email || !password) {
    throw Error("please provide all value");
  }

  if (!user) {
    throw Error("cannot find the Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return user;
  }
};

export default mongoose.model("User", UserSchema);
