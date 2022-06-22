const bcrypt = require("bcrypt");
const generatePassword = require('../services/generatePassword');
const User = require("../models/User");
const {generateToken} = require('../services/jwt');
const {sendMail} = require('../services/mailgun');
const addUser = require('../services/addUser');
const changeUserPassword = require('../services/changeUserPassword');

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404).send("Please add all fields");
    return;
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404).send("User already exists");
    return;
  }
  addUser(name,email,password);
  const messageData = {
    from: "baohuynhxayda@gmail.com",
    to: email,
    subject: "Register successfully",
    text: "Register successfully"
  }
  sendMail(messageData);
  res.status(200).send("register successfully");
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).send("Please add all fields");
    return;
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const messageData = {
      from: "baohuynhxayda@gmail.com",
      to: email,
      subject: "Login successfully",
      text: "Login successfully"
    }
    sendMail(messageData);
    res.cookie('token',generateToken(user._id)).status(200).send("Login successfully");
  } else {
    res.status(404).send("Your e-mail/password is invalid!");
    return;
  }
}

async function forgotPassword(req,res){
  const {email} = req.body; 
  if (!email) {
    res.status(404).send("Please add all fields");
    return;
  }
  const user = await User.findOne({ email });
  if (user) {
    const newPassword = generatePassword();
    changeUserPassword(email, newPassword);
    const messageData = {
      from: "baohuynhxayda@gmail.com",
      to: email,
      subject: "Change password successfully",
      text: `Your password has changed to ${newPassword}`
    }
    sendMail(messageData);
    res.status(200).send("Success");
  } else {
    res.status(404).send("User not found");
    return;
  }
}

async function logout(req,res){
  res.status(204).clearCookie("token").send("Logout successfully");
}

module.exports = { register, login, forgotPassword, logout };
