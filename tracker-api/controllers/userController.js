const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const userRegister = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPwd = await bcrypt.hash(req.body.password, salt);

  User.create(
    {
      fullname: req.body.username,
      email: req.body.email,
      username: req.body.username,
      password: hashedPwd,
    },
    function (err, success) {
      if (err) {
        console.log("Could not create new user");
      } else {
        res.json({
          id: success._id,
          username: success.username,
          token: generateToken(success._id),
        });
      }
    }
  );
};

const userLogin = async (req, res, next) => {
  User.exists({ username: req.body.username }, function (err, succes) {
    if (err) {
      console.log(err);
      return res.json({ message: "No account" });
    }

    if (!succes) {
      res.json({ allowUser: false });
    } else {
      User.findOne({ username: req.body.username }, function (err, user) {
        if (err) {
          console.log(err);
        } else if (bcrypt.compare(req.body.password, user.password)) {
          res.json({
            id: user._id,
            username: user.username,
            token: generateToken(user._id),
          });
        }
      });
    }
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, "" + process.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { userRegister, userLogin };
