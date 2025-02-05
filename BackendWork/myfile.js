function sum(num1,num2){
  return num1+num2
}
const multiplication=(num1,num2)=>{
    return num1*num2
  }
// const result=sum(23,24)
// console.log(result)
const obj= {sum:sum,
multiplication:multiplication}
module.exports=obj
