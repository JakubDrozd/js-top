// let newVariable = "Number";

// let Id = 1;

// let user = {
//   Id: 1,
//   name: "Veanty",
//   profession: "Hunter",
//   isAdmin: true,
//   ["favorite" + newVariable]: 4,
// };

// function makeUser(name, profession) {
//   return {
//     Id: ++Id,
//     name,
//     profession,
//     isAdmin: false,
//     favoriteNumber: Math.floor(Math.random() * (30 - 1) + 1),
//   };
// }
// user.level = 99;
// for (let prop in user) {
//   console.log(prop);
// }

// let gum4 = makeUser("Gum4", "Mage");
// let seb4 = makeUser("Seb4", "Berserker");

// for (let properties in gum4) {
//   console.log(properties);
// }

let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;

for (let prop in user2) {
  console.log(user2.surname);
}

let obj = {};

function isEmpty(object) {
  for (let prop in object) {
    return false;
  }
  return true;
}

let salaries = {};

let sum = salaries.John + salaries.Ann + salaries.Pete;

function sumSalaries(object) {
  let sum = 0;
  if (isEmpty(object)) {
    return 0;
  } else {
    for (let prop in object) {
      sum += object[prop];
    }
    return sum;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(object) {
  for (let prop in object) {
    if (typeof object[prop] !== "number") {
      return;
    } else {
      object[prop] *= 2;
    }
  }
}
