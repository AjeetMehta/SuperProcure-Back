var mongoose = require("mongoose");

var superdata = new mongoose.Schema({
  institute_name: {
    type: String,
    required: [true, "Cant be blank"],
  },
  branch_name: {
    type: String,
    required: [true, "Cant be blank"],
  },
  address: {
    type: String,
    required: [true, "Cant be blank"],
  },
  city: {
    type: String,
    required: [true, "Cant be blank"],
  },
  branch_incharge: {
    type: String,
    required: [true, "Cant be blank"],
  },
  contact: {
    type: String,
    required: [true, "Cant be blank"],
  },
  pincode: {
    type: String,
    required: [true, "Cant be blank"],
  },
});

data = mongoose.model("data", superdata);

module.exports = data;
