import _ from "lodash";
import "./style.css";
import Icon from "./avatar.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  button.innerHTML = "Click me and check the console";
  button.onclick = printMe;

  element.appendChild(button);

  const icon = new Image();
  icon.src = Icon;

  return element;
}

document.body.appendChild(component());
