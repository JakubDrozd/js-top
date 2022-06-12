const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

const sameAge = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});

const numbers = [13, 2, 5];

const sumNumbers = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
