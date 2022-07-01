function talk(languange, isPolite) {
  if (isPolite) {
    if (languange === "en") {
      return `Greetings, my name is ${this.name}`;
    } else if (languange === "pl") {
      return `Cześć, jestem ${this.name}`;
    }
  } else if (!isPolite) {
    if (languange === "en") {
      return `Hi I'm ${this.name}`;
    } else if (languange === "pl") {
      return `Jestem ${this.name}`;
    }
  }
}
const me = {
  name: "Jakub",
};

console.log(talk.apply(me, ["pl", false]));

class Person {
  constructor(name) {
    this.name = name;
    this.talk = function () {
      console.log(this);
    };

    setTimeout(
      function () {
        console.log(this);
      }.bind(this),
      100
    );
  }
}

const newMe = new Person("Jakub");
