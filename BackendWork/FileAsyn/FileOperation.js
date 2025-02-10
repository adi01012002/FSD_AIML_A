const fs = require("fs");

function dataWrite() {
  fs.writeFile("data.pdf", "Hello Writing Pdf File data", (err) => {
    if (err) {
      console.log("Error Whiel Wrting in file", err);
    }
    console.log("Data Wrtten Succesfully ");
  });
  console.log("Rsource CLosed");
}

function dataRead() {
  fs.readFile("data.pdf", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error While Reading the file");
    }
    console.log("Data : ", data);
  });
}

const obj={dataWrite,dataRead};
module.exports=obj
