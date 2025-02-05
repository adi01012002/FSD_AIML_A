const fs = require("fs");
function myWritefile() {
  try {
    console.log("Before Writing");
    fs.writeFileSync("data.txt", "Data is written by Nodejs");
    console.log("Data Written successfully");
  } catch (err) {
    console.log("Error in writing" + err);
  }
}
function myReadfile() {
  try {
    console.log("Before Reading");
    const rd = fs.readFileSync("data.txt"); //{encoding:'utf-8'}
    console.log(rd.toString());
  } catch (err) {
    console.log("Error in Reading" + err);
  }
}
function myAppendfile() {
  try {
    console.log("After Reading");
    fs.appendFileSync("data.txt", "Appended data by fs modeule");
    console.log("After Append");
  } catch (err) {
    console.log("Error in Append" + err);
  }
}
function deletefile() {
    try {
      console.log("Before Delete");
      fs.unlinkSync("data.txt");
      console.log("file deleted");
    } catch (err) {
      console.log("Error in deleting File" + err);
    }
  }
module.exports = { myWritefile, myReadfile, myAppendfile ,deletefile};


