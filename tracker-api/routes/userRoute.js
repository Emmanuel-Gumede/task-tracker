const userRouter = require("express").Router();
const {
  userRegister,
  userLogin,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

userRouter.get("/", (req, res, next) => {
  res.json({ username: "username" });
});

userRouter.post("/user_register", userRegister);
userRouter.post("/user_login", userLogin);
userRouter.post("/forgot_password", forgotPassword);
userRouter.put("/reset_password/:resetToken", resetPassword);

module.exports = userRouter;
