const bcrypt = require("bcrypt");
const User = require("../models/User");
const {generateToken} = require('../helpers/auth');

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.json({ msg: "a" });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.cookie('token',generateToken(user._id)).send();
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
}

module.exports = { register, login };
