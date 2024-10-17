// const student={
//     name:"xyz",
//     brach:"AIML",
//     Sec:"A"
// }
// // const newStudent=student;
// const newStudent={id:101,...student};
// console.log(student)
// newStudent.name="ABC";
// console.log(newStudent)
// console.log(student)

// const student = {
//   name: "xyz",
//   branch: "AIML",
//   Sec: "A",
// };
// const { name, branch, Sec } = student;
// console.log(name);
// console.log(branch);
// console.log(Sec);

const myset = new Set();
// console.log(myset);

myset.add(23);
myset.add(23);
myset.add(24);
myset.add(23);
myset.add(22);
myset.add(24);
const num = [1, 2, 3, 4, 5, 6, 7];
// const a = num.filter((n) => n % 2 == 0);
// const a1 = num.map((n) => n * 2);
// console.log(a);
// console.log(a1);
const a1 = num.reduce((n,s) => s+n);
console.log(a1)
