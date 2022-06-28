const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  },
};

function Animal(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
}

const leo = Animal("Leo", 7);
const snoop = Animal("Snoop", 10);

const parent = {
  name: "Stacey",
  age: 35,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Ryan";
child.age = 7;
