const User = require('../models/User');
const bcrypt = require("bcrypt");

async function changeUserPassword(email, newPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  await User.findOneAndUpdate({email}, {password: hashedPassword});
}

module.exports = changeUserPassword;