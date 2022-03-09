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

userRouter.post("/login", hashPass, addUser);
userRouter.post("/user", getUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

// userRouter.get("/login", comparePass);

module.exports = userRouter;
