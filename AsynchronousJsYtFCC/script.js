// console.log("I");
// console.log("eat");
// setTimeout(() => {
//   console.log("ice cream");
// }, 3000);
// console.log("with a");
// console.log("spoon");
//

// function one(call_two) {
//   console.log("step 1 complete");
//   call_two();
// }
// function two() {
//   console.log("step 2");
// }
// one(two);

// let order = (fruit_index, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_index]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production started");
//     setTimeout(() => {
//       console.log("the fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(() => {
//           console.log("machine was started");
//           setTimeout(() => {
//             console.log(`${stocks.holder[0]} was choosen`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[1]} was selected`);
//               setTimeout(() => {
//                 console.log("severe this");
//               }, 2000);
//             }, 1000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   });
// };

// order(0, production);

// let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("shop closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(1, () => {
//       console.log("prodicton has started");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("the fruit was chopped");
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`start the machine`);
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`${stocks.holder[0]}was choosen`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.toppings[0]} was melted`);
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`serve ice cream `);
//     });
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("this runs every time");
//   });
// async function order() {
//   try {
//     abc();
//   } catch (error) {
//     console.log("abc doesn't exits", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }
// order().then(() => {
//   console.log("test");
// });

// let toppingsChoice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you like?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log(" A ");
//   console.log(" B ");
//   console.log(" C ");
//   await toppingsChoice();
//   console.log(" D ");
//   console.log(" E ");
// }

// kitchen();
// console.log("doing the tables");
// console.log("cleaning the tables");
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    console.log(`${stocks.fruits[0]}`);
    await time(2000);
    await time(1);
    console.log("start the producting");
    await time(2000);
    console.log("cut the fruit");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    await time(2000);
    console.log(`start the machine`);
    await time(3000);
    console.log(`ice cream placed on${stocks.holder[0]}`);
    await time(2000);
    console.log(`${stocks.toppings[0]} was selected`);
    await time(500);
    console.log("serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("runs every time at the end");
  }
}

kitchen();
