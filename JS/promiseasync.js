function register() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return reject("Network error");
        console.log("Registered");
        resolve();
      }, 5000);
    });
  }
  function sendemail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Send mail");
        resolve();
      }, 4000);
    });
  }
  function login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("login");
        resolve();
      }, 3000);
    });
  }
  function getdata() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("get data");
        resolve();
      }, 2000);
    });
  }
  function displaydata() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("display data");
        resolve();
      }, 1000);
    });
  }
  console.log("Work other application");
  
  register()
    .then(sendemail)
    .then(login)
    .then(getdata)
    .then(displaydata)
    .catch((err) => {
      console.log(err);
    });
  