const express = require("express");

const userLogin = express.Router();

userLogin.get("/", (req, res) => {
  console.log("Home route was hit");
  res.render("home");
});

module.exports = userLogin;
