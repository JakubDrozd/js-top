function SuperElement(type, content) {
  this.el = document.createElement(type);
  document.body.appendChild(this.el);
  this.el.textContent = content;
  this.el.addEventListener("click", () => {
    console.log("clicked!");
  });
}

const array = ["a", "b", "c", "d", "e", "f", "g"];

const myElements = array.map((element) => {
  return new SuperElement("li", element);
});
