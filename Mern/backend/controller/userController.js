import User from "../model/userModel.js";

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = user.createJWT();

    res.status(201).json({ user: { email: user.email, user: user }, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await User.comparePassword(email, password);

    if (!login) {
      console.log("no values");
    }
    return console.log("login user");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
