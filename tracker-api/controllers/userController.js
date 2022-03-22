const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

exports.userRegister = async (req, res, next) => {
  const newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  const user = await newUser.save();

  const accessToken = await user.getSignedToken();
  user.accessToken = accessToken;
  await user.save();

  res.cookie("jwt", accessToken, {
    httpOnly: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({
    accessToken: accessToken,
    userEmail: user.email,
    userId: user._id,
  });
};

exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).json({ error: "Invalid credentials" });
  }

  const isMatch = await user.matchPasswords(password);

  if (!isMatch) {
    return res.status(404).json({ error: "Invalid credentials" });
  }

  const accessToken = user.getSignedToken();
  user.accessToken = accessToken;
  await user.save();

  res.cookie("jwt", accessToken, {
    httpOnly: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({
    accessToken: accessToken,
    userEmail: user.email,
    userId: user._id,
  });
};

exports.forgotPassword = () => {
  res.json({ message: "Forgot Password Route" });
};

exports.resetPassword = () => {
  res.json({ message: "Reset Password Route" });
};
