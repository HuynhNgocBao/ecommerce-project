const {
  registerService,
  loginService,
  forgotPasswordService,
  checkTokenService,
  createNewPasswordService,
} = require("../services/authService");

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404).send("Please add all fields");
    return;
  }
  const isUserExists = registerService(name, email, password);
  if (isUserExists) {
    res.status(404).send("User already exists");
    return;
  }
  res.status(200).send("register successfully");
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).send("Please add all fields");
    return;
  }
  const token = await loginService(email, password);
  if (token) {
    res
      .cookie("token", token)
      .status(200)
      .send("Login successfully");
  } else {
    res.status(400).send("Your e-mail/password is invalid!");
    return;
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  if (!email) {
    res.status(404).send("Please add all fields");
    return;
  }
  const user = await forgotPasswordService(email);
  if (user) {
    res.status(200).send("Send link forgotpassword to user successfully");
  } else {
    res.status(404).send("User not found");
  }
}

async function checkToken(req, res) {
  const {token} = req.body;
  if (!token) {
    res.status(404).send("Please add all fields");
    return;
  }
  const isTokenRight = await checkTokenService(token);
  if (isTokenRight) {
    res.status(200).send("Verify token successfully");
  } else {
    res.status(400).send("Token malformed");
  }
}

async function createNewPassword(req, res) {
  const { token, newpassword } = req.body;
  if (!token || !newpassword) {
    res.status(404).send("Please add all fields");
    return;
  }
  const user = await createNewPasswordService(token, newpassword);
  if (user){
    res.status(200).send("Create new password successfully");
  }
  else{
    res.status(400).send("User not found");
  }
}

async function logout(req, res) {
  res.status(204).clearCookie("token").send("Logout successfully");
}

module.exports = {
  register,
  login,
  forgotPassword,
  checkToken,
  createNewPassword,
  logout,
};
