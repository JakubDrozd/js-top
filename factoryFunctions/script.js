const personFactory = (name, age) => {
  const greet = () => {
    console.log(`Hi I'm ${name}`);
  };
  return { name, age, greet };
};

const jakub = personFactory("Jakub", 19);

const piotrek = personFactory("Piotr", 20);

//Private function

const Module = function () {
  return {
    function() {
      console.log("Hello");
    },
  };
};

const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => {
    console.log(`---${capitalizeString()}---`);
  };
  return { printString };
};

const taco = FactoryFunction("taco");

//Factory function

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // oof
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level > enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const veanty = Player("Veanty", 19);
const wanod = Player("Wanod", 9);

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(2);
const circle2 = createCircle(15);

//Private variables

let obj = (function () {
  let _prop1 = "Starman";
  return {
    prop2: 1981,
    get property1() {
      return _prop1;
    },
    set prop1(value) {
      prop1 = value;
    },
  };
})();

for (let prop in obj) {
  console.log(prop);
}

console.log(obj.prop2);

console.log(obj.property1);

obj.prop1 = "The Big Lebowski";
console.log(obj.property1);

console.log(obj._prop1);

//Getters and setters

const person = {
  firstName: "Jakub",
  lastName: "Drozd",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firsName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";

console.log(person);

//Inheritance with factories

const Person = (name) => {
  const sayName = () => {
    console.log(`my name is ${name}`);
  };
  return { sayName };
};

const Nerd = (name) => {
  const { sayName } = Person(name);
  const doSomethingNerdy = () => {
    console.log(`nerd stuff`);
  };
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName();
jeff.doSomethingNerdy();
