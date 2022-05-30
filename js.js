// // let name = "Johny";
// let surname = "Blackwell";
// let wholeName = name + " " + surname;
// let age = 22;
// let message = "Hello" + " " + name + " " + surname + " of age " + age + ".";
// const birthday = "06.11.2002";
// console.log(message);
// console.log(wholeName);
// console.log(birthday);
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_GREEN;
// alert(color);

let name = "John";
let admin = name;
console.log(admin);

let ourPlanetName = "Earth";
let currentUserName = admin;
const myInt = 5;
const myIntTwo = 25;
const myFloat = 6.667;
const myFloatTwo = 3.143345456;
console.log(myInt, myFloat, myIntTwo, myFloatTwo);
console.log(typeof myInt, typeof myFloat, typeof myIntTwo, typeof myFloatTwo);

const fixedMyFloatTwo = myFloatTwo.toFixed(3);
console.log(fixedMyFloatTwo);
let myNumber = "72";
myNumber = myNumber + 3;
console.log(myNumber);
myNumber = Number(myNumber) + 3;
console.log(myNumber);

console.log(10 + 7);
console.log(9 * 8);
console.log(60 % 3);

let num1 = 2;
let num2 = 10;
// console.log(num1 ** num2);
// console.log(2 / 10 / (8 + 2));
num2--;
console.log(num1);

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start") {
    btn.textContent = "Stop";
    txt.textContent = "The machine is working...";
  } else {
    btn.textContent = "Start";
    txt.textContent = "The machine isn't working";
  }
}

let randomNumber = 32189;

console.log(27 + 92);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
9 * a;
let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
