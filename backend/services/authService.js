const User = require("../models/User");
const sendMail = require("../helpers/mailgun");
const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require("../helpers/jwt");

async function registerService(name, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const messageData = {
    from: "baohuynhxayda@gmail.com",
    to: email,
    subject: "Register successfully",
    text: "Register successfully",
  };
  sendMail(messageData);
}

async function loginService(email, password) {
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const messageData = {
      from: "baohuynhxayda@gmail.com",
      to: email,
      subject: "Login successfully",
      text: "Login successfully",
    };
    sendMail(messageData);
    return user;
  } else {
    return undefined;
  }
}

async function forgotPasswordService(email) {
  const user = await User.findOne({ email });
  if (user) {
    const token = generateToken(user._id, "10m");
    const messageData = {
      from: "baohuynhxayda@gmail.com",
      to: email,
      subject: "Change password",
      text: `Please go to http://localhost:3000/createnewpassword?token=${token} to change your password`,
    };
    sendMail(messageData);
    return true;
  } else return false;
}

async function checkTokenService(token) {
  try {
    return verifyToken(token);
  } catch (error) {
    return null;
  }
}

async function createNewPasswordService(token, newpassword) {
  const decoded = verifyToken(token);
  const user = await User.findById(decoded.id);
  if (user) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);
    await User.findByIdAndUpdate(decoded.id, {password: hashedPassword});
    return user;
  }
  else{
    return null;
  }
}

module.exports = {
  registerService,
  loginService,
  forgotPasswordService,
  checkTokenService,
  createNewPasswordService,
};
