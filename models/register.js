var mongoose = require("mongoose");

var user = new mongoose.Schema({
  branch: {
    type: String,
    required: [true, "Cant be blank"],
  },
  password: {
    type: String,
    required: [true, "Cant be blank"],
  },
});

manager = mongoose.model("manager", user);
module.exports = manager;
