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

const string = "The revolution will not be televised";
console.log(string);
const badString = string;
console.log(badString);
const bigMouth = "I've got no right to take my place";
console.log(bigMouth);
const socratesQuote =
  '"It is a disgrace to grow old through sheer carelessness before seeing what manner of man you may become by developing your bodily strength and beauty to their highest limit."';
console.log(socratesQuote);

let currentUserPrivileges = "Admin";
const welcomeMessage = `Welcome ${currentUserName}, the ${currentUserPrivileges}`;
console.log(welcomeMessage);

const button = document.querySelector(".second");

function welcome() {
  const name = prompt("Whats your name?");
  const age = prompt("What's your age?");
  alert(`Welcome ${name}, age : ${age}`);
}

button.addEventListener("click", welcome);

const gameName = "Elden Ring";
const score = 8.7;
const highScore = 10;
const opinion = `I really like ${gameName}, I give it a score of ${(
  (score / highScore) *
  100
).toFixed(0)}%`;
console.log(opinion);

const longString = "AKSDJASJDQWRIUJFEXKJCNXLFHEJWUIFWE";
const lengthOfLongString = longString.length;
console.log(lengthOfLongString);
const sliceOfGameName = gameName.slice(0, 5);
console.log(sliceOfGameName);
const substringOfGameName = gameName.substring(2, 5);
console.log(substringOfGameName);
// Slice and substring are really similar, but substring takes negative values as 0
// substr takes where to begin and how much to cut off

const substrOfGameName = gameName.substr(0, 100);
console.log(substrOfGameName);

const pleaseVisitMessage = "Please visit MICROSOFT and MICROSOFT.com";
const pleaseVisitMessageChanged = pleaseVisitMessage
  .replace(/Microsoft/g, "Terraria")
  .replace(/MICROSOFT/i, "Terraria");
console.log(pleaseVisitMessage);
console.log(pleaseVisitMessageChanged);

const welcomeMessageUpperCase = "WELCOME";
console.log(welcomeMessageUpperCase);
const welcomeMessageLowerCase = welcomeMessageUpperCase.toLowerCase();
console.log(welcomeMessageLowerCase);
const welcomeMessageBackToUpperCase = welcomeMessageLowerCase.toUpperCase();
console.log(welcomeMessageBackToUpperCase);
const messageWithSpaces = "        Hi (^^)/          ";
console.log(messageWithSpaces);
const trimmedMessageWithSpaces = messageWithSpaces.trim();
console.log(trimmedMessageWithSpaces);

// padding

let number = "5";
let paddedNumber = number.padStart(4, "x").padEnd(7, "x");
console.log(paddedNumber);

let firstLetter = gameName.charAt(0);
console.log(firstLetter);

const messageToArray = "Hi my name is Shakes";
console.log(messageToArray.split(""));
