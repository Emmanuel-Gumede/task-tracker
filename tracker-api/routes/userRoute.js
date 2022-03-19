const userRouter = require("express").Router();
const { userRegister, userLogin } = require("../controllers/userController");

userRouter.get("/", (req, res, next) => {
  res.json({ username: "username" });
});

userRouter.post("/user_register", userRegister);
userRouter.post("/user_login", userLogin);

module.exports = userRouter;
