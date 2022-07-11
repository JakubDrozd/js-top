localStorage.clear();

const people = [];

const person1 = {
  name: "Jakub",
  age: 19,
};

const person2 = {
  name: "Bartek",
  age: 18,
};

people.push(person1);
people.push(person2);

let people_serialized = JSON.stringify(people);

localStorage.setItem("arrays", people_serialized);

let people_deserialized = JSON.parse(localStorage.getItem("arrays"));

console.log(localStorage);

console.log(people_deserialized);
