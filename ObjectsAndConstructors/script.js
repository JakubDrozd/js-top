function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function (amount) {
  onsole.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

function Lion(...args) {
  Animal.apply(this, args);
  this.mightyRoar = function () {
    console.log("ROOOOOOOARRRRR");
  };
}

Lion.prototype = Object.create(Animal.prototype);

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);
const tim = new Lion("Tim", 50);
