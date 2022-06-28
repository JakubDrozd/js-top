const cat = {
  init: function (sound) {
    this.sound = sound;
    return this;
  },
  makeSound: function () {
    console.log(this.sound);
  },
};

const mark = Object.create(cat);
mark.init("meow");
mark.makeSound();

const waffles = Object.create(cat);
waffles.init("meooooow!");
waffles.makeSound();

console.log(`Is mark a cat? ${cat.isPrototypeOf(mark)}`);
