import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const createJWT = function (_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createJWT(user._id);

    if (!user) {
      res.status(404).json({ msg: `user not found` });
    }

    res.status(201).json({
      email,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createJWT(user._id);

    if (!user) {
      res.status(404).json({ msg: `user not found` });
    }
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
