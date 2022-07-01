function personFactory(name) {
  return {
    name,
    talk() {
      return `Hello I'm ${name}`;
    },
  };
}

const jakub = personFactory("Jakub");

const ben = personFactory("Ben");

const jill = personFactory("Jill");

//---------------------------------------------------------------

function createElement(type, text, color) {
  const el = document.createElement(type);
  document.body.appendChild(el);
  el.textContent = text;
  el.style.color = color;
  return {
    el,
    setText(text) {
      el.textContent = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}

const h1 = createElement("h1", "Hey Guys", "green");
