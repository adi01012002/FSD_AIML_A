function avg(num1,num2,num3){
    let s=num1+num2+num3;
    let Avg=s/3;
    return Avg;
}
function AvgSqrt(num1,num2,num3){
    return Math.sqrt(avg(num1,num2,num3));
}

module.exports=AvgSqrt;