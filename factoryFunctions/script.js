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
