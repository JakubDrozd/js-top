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

function Person(name) {
  this.name = name;
  console.log(this);
}

const newMe = new Person("Jakub");
