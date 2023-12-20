// // ES5: Part 1

// var isMomHappy = true;

// // Promise
// var willGetNewPhone = new Promise(function (resolve, reject) {
//   if (isMomHappy) {
//     var phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone); //fulfilled
//   } else {
//     var reason = new Error("mom is not happy");
//     reject(reason); //reject
//   }
// });
// // 2nd Promise
// var showOff = function (phone) {
//   return new Promise(function (resolve, reject) {
//     var message =
//       "hey friend , i have a new" + phone.color + " " + phone.brand + "phone";
//     resolve(message);
//   });
// };

// var askMom = function () {
//   console.log("before asking mom");
//   willGetNewPhone
//     .then(showOff)
//     .then(function (fulfilled) {
//       console.log(fulfilled);
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
//   console.log("after asking mom");
// };
// askMom();
// ----------------------------------------------------------------------
// // // ES6

// const isMomHappy = true;

// // Promise
// const willGetNewPhone = new Promise((resolve, reject) => {
//   if (isMomHappy) {
//     const phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone); //fulfilled
//   } else {
//     var reason = new Error("mom is not happy");
//     reject(reason); //reject
//   }
// });
// // 2nd Promise
// const showOff = function (phone) {
//   return new Promise((resolve, reject) => {
//     const message = `Hey friend I have a new ${phone.color} ${phone.brand} phone`;
//     resolve(message);
//   });
// };

// const askMom = function () {
//   console.log("before asking mom");
//   willGetNewPhone
//     .then(showOff)
//     .then((fulfilled) => console.log(fulfilled))
//     .catch((error) => console.log(error.message));
//   console.log("after asking mom");
// };
// askMom();

// es7 async/await
const isMomHappy = false;

// Promise
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone); //fulfilled
  } else {
    const reason = new Error("mom is not happy");
    reject(reason); //reject
  }
});

// 2nd Promise
async function showOff(phone) {
  return new Promise((resolve, reject) => {
    const message = `Hey friend I have a new ${phone.color} ${phone.brand} phone`;
    resolve(message);
  });
}
// call our promise in ES7 async await style
async function askMom() {
  try {
    console.log("before asking mom");

    let phone = await willGetNewPhone;
    let message = await showOff(phone);
    console.log(message);
    console.log("after asking mom");
  } catch (error) {
    console.log("catch");
    console.log(error.message);
  }
}
// async await it here too
(async () => {
  await askMom();
})();
