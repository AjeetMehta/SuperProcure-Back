var branch = require("./models/details");
// var bcrypt = require("bcrypt");
// var saltRounds = 10;
// const malik = require("./models/register");
const xlsx = require("xlsx");

const wb = xlsx.readFile("BeetleNut_Data1.xlsx").Sheets["Sheet1"];
const data = xlsx.utils.sheet_to_json(wb);

function splitpin(pins) {
  let different = [];
  let p = "";
  for (i = 0; i < pins.length; i++) {
    if (pins[i] >= "0" && pins[i] <= "9") {
      p += pins[i];
    } else if (pins[i] == ",") {
      if (p != "") different.push(p);
      p = "";
    }
  }
  if (p != "") different.push(p);
  return different;
}

function seed() {
  data.forEach((store) => {
    let Pincodes = splitpin(String(store["Pincode"]));

    Pincodes.forEach((Pincode) => {
      var item = {
        institute_name: store.IName,
        branch_name: store.BName,
        address: store.Address,
        city: store.City,
        branch_incharge: store.BIncharge,
        contact: store.ContactNum,
        pincode: Pincode,
      };
      branch.create(item, function (err, created) {
        if (err) console.log(err);
        else console.log(created);
      });
    });
  });
}

// function seed() {
//   data.forEach((manager) => {
//     bcrypt.hash(manager["BIncharge"], saltRounds, function (err, hash) {
//       var item1 = { branch: manager["BName"], password: hash };
//       malik.create(item1, function (err, created) {
//         if (err) res.send(err);
//         else console.log("created");
//       });
//     });
//   });
// }

module.exports = seed;
