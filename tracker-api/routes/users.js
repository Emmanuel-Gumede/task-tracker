const express = require("express");

const user_route = express.Router();

user_route.post("/", (req, res, next) => {
  console.log(req.body);
  res.json({ userName: req.body.username });
});

module.exports = user_route;
