var express = require("express");
var branch = require("../models/details");
var malik = require("../models/register");
var admin = require("../models/adminschema");
// var seed = require("../seed.js");

var bcrypt = require("bcrypt");
var saltRounds = 10;

var app = express.Router();

// seed();
app.get("/", function (req, res) {
  res.send("SuperProcure Backend");
});

app.get("/all", function (req, res) {
  branch.find({}, function (err, found) {
    if (err) res.status(400).send(err);
    else res.send(found);
  });
});

app.post("/pin", function (req, res) {
  const pinwa = req.body.pincod;
  branch.find({ pincode: pinwa }, function (err, found) {
    if (err) res.status(400).send(err);
    else res.send(found);
  });
});

// app.post("/adminregister", function (req, res) {
//   bcrypt.hash(req.body.password, saltRounds, function (hash) {
//     var name = req.body.name;
//     var password = hash;
//     var item = { name: name, password: password };
//     admin.create(item, function (err) {
//       if (err) res.status(400).send(err);
//       else {
//         res.send({ message: "Registration Successful" });
//       }
//     });
//   });
// });

app.post("/login", function (req, res) {
  var branch = req.body.branch;
  var password = req.body.password;

  malik.findOne({ branch: branch }, function (err, found) {
    if (!found)
      res.status(400).send({
        error: "Either Your Branch is not registered Or You wrote wrong",
      });
    else {
      bcrypt.compare(password, found.password, function (err, result) {
        if (result == true) {
          res.send({ message: "Successfully LoggedIn" });
        } else res.send({ error: "Wrong Password" });
      });
    }
  });
});

app.post("/adminlogin", function (req, res) {
  var name = req.body.aname;
  var password = req.body.password;

  admin.findOne({ name: name }, function (err, found) {
    if (!found)
      res.status(400).send({
        error: "Not Registered",
      });
    else {
      bcrypt.compare(password, found.password, function (err, result) {
        if (result == true) {
          res.send({ message: "Successfully LoggedIn" });
        } else res.send({ error: "Wrong Password" });
      });
    }
  });
});

module.exports = app;
