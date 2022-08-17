import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../error/index.js";

const signup = async (req, res) => {
  const { name, password, email } = req.body;

  //check values
  if (!name || !password || !email) {
    throw new BadRequestError("please provide all values");
  }

  //check exist user
  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new BadRequestError("the email is already in use");
  }

  //create user
  const user = await User.create({ name, password, email });

  //create jwt
  const token = user.createJWT(user._id);

  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  res.send("login");
};

export { login, signup };
