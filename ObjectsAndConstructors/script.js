const cat = {
  makeSound: function () {
    console.log(this.sound);
  },
};

const mark = Object.create(cat);
mark.sound = "meow";
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = "meoooooow";
waffles.makeSound();

console.log(`Is mark a cat? ${cat.isPrototypeOf(mark)}`);
