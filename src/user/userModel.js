const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const User = mongooose.model("User", userSchema);

module.exports = User;
