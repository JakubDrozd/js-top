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
    myMethod: function () {
      console.log("myMethod has been called");
    },
  };
};
