function register(cb) {
  setTimeout(() => {
    console.log("Registered");
    cb();
  }, 5000);
}
function sendemail(cb) {
  setTimeout(() => {
    console.log("Send mail");
    cb();
  }, 4000);
}
function login(cb) {
  setTimeout(() => {
    console.log("login");
    cb();
  }, 3000);
}
function getdata(cb) {
  setTimeout(() => {
    console.log("get data");
    cb();
  }, 2000);
}
function displaydata() {
  setTimeout(() => {
    console.log("display data");
  }, 1000);
}
console.log("Work other application");

register(function () {
  sendemail(function () {
    login(function () {
      getdata(function () {
        displaydata();
      });
    });
  });
});
