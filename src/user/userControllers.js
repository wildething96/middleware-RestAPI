const bcrypt = require("bcryptjs");
const User = require("./userModel");

// let pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
// pattern.test()

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find(req.body);
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const updatedUser = {
        username: req.body.newUsername
          ? req.body.newUsername
          : req.body.username,
        email: req.body.email || user.email,
        pass: req.body.pass || user.pass,
      };
      await User.updateOne({ username: user.username }, updatedUser);
      res.status(200).send({ updatedUser });
    } else {
      res.status(404).send({
        error: "Cannot find user to update",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ username: req.body.username });
    res.status(200).send({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.comparePass = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    (await bcrypt.compare(req.body.pass, user.pass))
      ? res.status(200).send({ message: "Successfully Logged In!" })
      : res.status(500).send({ err: "Wrong Password!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
