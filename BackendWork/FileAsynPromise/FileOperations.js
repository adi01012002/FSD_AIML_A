const fs = require("fs").promises;
const promises = fs.writeFile(
  "data.txt",
  "Hello ,Wrtting data through Fs promises module",
  { encoding: "utf-8" }
);
// console.log(promises);
promises
  .then(() => {
    console.log("Data is Written Succesfully");
  })
  .catch((err) => {
    console.log("Error is", err);
  })
  .finally((msg) => {
    console.log("finally Done");
});


fs.readFile("data.txt", { encoding: "utf-8" }).then((data)=>{
    console.log("your data is : ",data)
}).catch((err)=>{
    console.log("Error in reading",err);
}).finally((msg)=>{
    console.log("Finally done")
})
 
