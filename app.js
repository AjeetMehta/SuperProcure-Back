const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

var app = express();

// mongoose.connect(
//   "mongodb://localhost/super",
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true }
// );

mongoose.connect(
  "mongodb+srv://AjeetMehta:ajeet1234@cluster0.2zavz.mongodb.net/insta?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

var userRoute = require("./routes/service");

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/posts", userRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Our SuperProcure Assignment app is running");
});
