import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../error/index.js";

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
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnAuthenticatedError("Invalid credential");
  }

  const checkPassword = await user.comparePassword(password);
  if (checkPassword) {
    throw new UnAuthenticatedError("Invalid");
  }

  res.status(StatusCodes.OK).json({ token });
};

export { login, signup };
