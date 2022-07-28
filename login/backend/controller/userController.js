import User from "../model/userModel.js";

//signup user

const signup = async (req, res) => {
  const { email, password } = req.body;
};

//login user
const login = async (req, res) => {
  res.send("login");
};

export { signup, login };
