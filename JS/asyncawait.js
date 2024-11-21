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

async function authentication() {
  try {
    await register();
    await login();
    await sendemail();
    await displaydata();
    await getdata();
  } catch(err) {
    console.log(err)

  }
}
authentication();
console.log("Work other application");
