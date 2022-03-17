const { Router } = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("./postControllers");

const userRouter = Router();

userRouter.post("/post", addPost);
userRouter.post("/getpost", getPost);
userRouter.post("/update", updatePost);
userRouter.post("/delete", deletePost);

module.exports = userRouter;
