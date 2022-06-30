const personFactory = (name, age) => {
  const greet = () => {
    console.log(`Hello I'm ${name}`);
  };
  return { name, age, greet };
};

const jakub = personFactory("Jakub", 19);

const piotrek = personFactory("Piotr", 20);
