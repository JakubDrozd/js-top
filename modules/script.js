const myModule = {
  name: "Will",
  age: 35,
  sayName() {
    console.log(this.name);
  },
  setName(newName) {
    this.name = newName;
  },
};

myModule.sayName();

myModule.setName("William");

myModule.sayName();

//-------------------------------------------------------
