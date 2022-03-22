const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.json({ message: "Not authorised" });
  }

  try {
    const decoded = jwt.verify(token, "" + process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({ message: "Not authorised" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
