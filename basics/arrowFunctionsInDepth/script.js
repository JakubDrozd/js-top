const sayHello = (...args) => `Hi I'm ${args[0]} ${args[1]} of age ${args[2]}!`;

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

const sayHello2 = () => console.log("Hello");

const Person = (name) => {
  this.name = name;
};

const me = {
  talk: () => {
    console.log(`hello`);
  },
};

function outer(callback, obj) {
  callback.call(obj);
}

function inner() {
  console.log(this);
}

//Don't use Arrow functions for:
// 1. Object methods
// 2. Prototypes
// 3. Constructors
// 4. Event handlers
