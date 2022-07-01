class Person {
  talk() {
    return `talking`;
  }
}

const me = new Person();

class SuperPerson extends Person {
  fly() {
    return `flying`;
  }
}

const newMe = new SuperPerson();

const person = {
  talk() {
    return `talking`;
  },
};

const superPerson = {
  fly() {
    return `flying`;
  },
};

Object.setPrototypeOf(superPerson, person);

const guy = Object.create(superPerson);
