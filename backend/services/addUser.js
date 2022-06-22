const User = require('../models/User');
const bcrypt = require("bcrypt");

async function addUser(name, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.create({
    name,
    email,
    password: hashedPassword,
  });
}

module.exports = addUser;