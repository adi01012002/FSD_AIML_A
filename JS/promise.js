// const myPromise=new Promise((resolve,reject)=>{
//     console.log("Executed promise")
//     // resolve("Success");
//     reject("Network Error")
// })
// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Executed finally block")
// })

// const data=fetch("https://api.github.com/users/adi01012002")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error =>console.error(error));

const data=fetch("https://api.github.com/users/adi01012002");
data.then((data1)=>{
    return data1.json();
}).then((res)=>{
    console.log(res)
})