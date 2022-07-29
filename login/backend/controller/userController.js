import User from "../model/userModel.js";
import { StatusCodes } from "http-status-codes";
//signup user

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = user.createJWT();

    res.json({ email, token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

//login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = user.createJWT();

    res.json({ user, token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

export { signup, login };
