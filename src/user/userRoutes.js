const { Router } = require("express");
const {
  addUser,
  comparePass,
  getUser,
  updateUser,
  deleteUser,
} = require("./userControllers");
const { hashPass } = require("../middleware/");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", getUser);
userRouter.put("/user", hashPass, updateUser);
userRouter.delete("/user", deleteUser);

userRouter.get("/login", comparePass);

module.exports = userRouter;
