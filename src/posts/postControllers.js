const Post = require("./postModel");

// let pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
// pattern.test()

exports.addPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).send({ post: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).send({ post });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id);
    if (post) {
      const updatedPost = {
        author: post.author,
        url: req.body.url || post.url,
        message: req.body.message || post.message,
        likes: post.likes,
      };
      await Post.updateOne({ author: post.author }, updatedPost);
      res.status(200).send({ updatedPost });
    } else {
      res.status(404).send({
        error: "Cannot find post to update",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id);
    await Post.deleteOne({ post });
    res.status(200).send({ message: "Post Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
