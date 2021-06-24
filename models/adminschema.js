var mongoose = require("mongoose");

var user1 = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Cant be blank"],
  },
  password: {
    type: String,
    required: [true, "Cant be blank"],
  },
});

adminmanager = mongoose.model("adminmanager", user1);
module.exports = adminmanager;
