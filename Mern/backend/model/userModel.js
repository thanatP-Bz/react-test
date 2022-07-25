import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
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

//create JWT

//hash password
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("please provide all value");
  }

  if (!validator.isEmail(email)) {
    throw Error("email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("This email is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//compare password
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
  }
};

export default mongoose.model("User", userSchema);
