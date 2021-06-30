
var fs = require("fs");

var data = "New File Contents moreeee";

fs.writeFile("week4.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});