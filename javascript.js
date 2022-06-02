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

// let name = "John";
// let admin = name;
// console.log(admin);

// let ourPlanetName = "Earth";
// let currentUserName = admin;
// const myInt = 5;
// const myIntTwo = 25;
// const myFloat = 6.667;
// const myFloatTwo = 3.143345456;
// console.log(myInt, myFloat, myIntTwo, myFloatTwo);
// console.log(typeof myInt, typeof myFloat, typeof myIntTwo, typeof myFloatTwo);

// const fixedMyFloatTwo = myFloatTwo.toFixed(3);
// console.log(fixedMyFloatTwo);
// let myNumber = "72";
// myNumber = myNumber + 3;
// console.log(myNumber);
// myNumber = Number(myNumber) + 3;
// console.log(myNumber);

// console.log(10 + 7);
// console.log(9 * 8);
// console.log(60 % 3);

// let num1 = 2;
// let num2 = 10;
// // console.log(num1 ** num2);
// // console.log(2 / 10 / (8 + 2));
// num2--;
// console.log(num1);

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start") {
//     btn.textContent = "Stop";
//     txt.textContent = "The machine is working...";
//   } else {
//     btn.textContent = "Start";
//     txt.textContent = "The machine isn't working";
//   }
// }

// let randomNumber = 32189;

// console.log(27 + 92);
// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a);
// 9 * a;
// let b = 7 * a;
// console.log(b);

// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;

// const string = "The revolution will not be televised";
// console.log(string);
// const badString = string;
// console.log(badString);
// const bigMouth = "I've got no right to take my place";
// console.log(bigMouth);
// const socratesQuote =
//   '"It is a disgrace to grow old through sheer carelessness before seeing what manner of man you may become by developing your bodily strength and beauty to their highest limit."';
// console.log(socratesQuote);

// let currentUserPrivileges = "Admin";
// const welcomeMessage = `Welcome ${currentUserName}, the ${currentUserPrivileges}`;
// console.log(welcomeMessage);

// const button = document.querySelector(".second");

// function welcome() {
//   const name = prompt("Whats your name?");
//   const age = prompt("What's your age?");
//   alert(`Welcome ${name}, age : ${age}`);
// }

// button.addEventListener("click", welcome);

// const gameName = "Elden Ring";
// const score = 8.7;
// const highScore = 10;
// const opinion = `I really like ${gameName}, I give it a score of ${(
//   (score / highScore) *
//   100
// ).toFixed(0)}%`;
// console.log(opinion);

// const longString = "AKSDJASJDQWRIUJFEXKJCNXLFHEJWUIFWE";
// const lengthOfLongString = longString.length;
// console.log(lengthOfLongString);
// const sliceOfGameName = gameName.slice(0, 5);
// console.log(sliceOfGameName);
// const substringOfGameName = gameName.substring(2, 5);
// console.log(substringOfGameName);
// // Slice and substring are really similar, but substring takes negative values as 0
// // substr takes where to begin and how much to cut off

// const substrOfGameName = gameName.substr(0, 100);
// console.log(substrOfGameName);

// const pleaseVisitMessage = "Please visit MICROSOFT and MICROSOFT.com";
// const pleaseVisitMessageChanged = pleaseVisitMessage
//   .replace(/Microsoft/g, "Terraria")
//   .replace(/MICROSOFT/i, "Terraria");
// console.log(pleaseVisitMessage);
// console.log(pleaseVisitMessageChanged);

// const welcomeMessageUpperCase = "WELCOME";
// console.log(welcomeMessageUpperCase);
// const welcomeMessageLowerCase = welcomeMessageUpperCase.toLowerCase();
// console.log(welcomeMessageLowerCase);
// const welcomeMessageBackToUpperCase = welcomeMessageLowerCase.toUpperCase();
// console.log(welcomeMessageBackToUpperCase);
// const messageWithSpaces = "        Hi (^^)/          ";
// console.log(messageWithSpaces);
// const trimmedMessageWithSpaces = messageWithSpaces.trim();
// console.log(trimmedMessageWithSpaces);

// // padding

// let number = "5";
// let paddedNumber = number.padStart(4, "x").padEnd(7, "x");
// console.log(paddedNumber);

// let firstLetter = gameName.charAt(0);
// console.log(firstLetter);

// const messageToArray = "Hi my name is Shakes";
// console.log(messageToArray.split(""));

// let welcomeMessageHello = alert("Hello");
// let whoIsThere = prompt("Who's there?");
// if (whoIsThere == "Admin") {
//   let password = prompt("Password?");
//   if (password == "TheMaster") {
//     alert("Welcome!");
//   } else if (!password) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else if (!whoIsThere) {
//   alert("Canceled");
// } else {
//   alert("I don't know you");
// }

const select = document.querySelector(".weather");
const paragraph = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;
  console.log(choice);
  switch (choice) {
    case "sunny":
      paragraph.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      paragraph.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long";
      break;
    case "snowing":
      paragraph.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      paragraph.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      paragraph.textContent = "";
  }
}

const selectTheme = document.querySelector("select.theme");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

selectTheme.addEventListener("change", () =>
  selectTheme.value === "black"
    ? update("#1F2937", "#F9FAF8")
    : update("#F9FAF8", "#1F2937")
);

// let officialNameQuestion = prompt('What is the "official" name of Javascript');
// officialNameQuestion === "ECMAScript"
//   ? alert("Right!")
//   : alert(`You don't know?
// "ECMAScript!"`);

// let getANumber = prompt("Choose your number");
// getANumber > 0 ? alert("1") : getANumber < 0 ? alert("-1") : alert("0");

// let result = a + b < 4 ? "below" : "over";

// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

function f(x) {
  return (x - 1) * (x + 3);
}

function welcome(name) {
  console.log(`Welcome ${name}`);
}

const log = document.querySelector("p.pressed");

html.addEventListener("keydown", (event) => {
  log.textContent = `You pressed ${event.key}`;
});

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

function min(a, b) {
  return a > b ? b : a;
}
function pow(a, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 == 0) {
    let x = Math.pow(a, n / 2);
    return x * x;
  } else {
    return Math.pow(a, n - 1);
  }
}

let sum = (a, b) => a + b;
let double = (a) => 2 * a;
let power = (a, n) => {
  if (n == 0) {
    return 1;
  } else if (n % 2 == 0) {
    let x = Math.pow(a, n / 2);
    return x ** 2;
  } else {
    return a * Math.pow(a, n - 1);
  }
};

// let ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   "Do you agree?",
//   () => alert("You agreed"),
//   () => alert("You canceled the execution.")
// );

let add7 = (a) => a + 7;
let multiply = (a, b) => a * b;
function capitalize(text) {
  let toLowerCase = text.toLowerCase();
  let toCapitalFirstLetter =
    toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
  return toCapitalFirstLetter;
}

function lastLetter(text) {
  return text.charAt(text.length - 1);
}

// let answer = +prompt(
//   "Please enter the number you would like to FizzBuzz up to: "
// );

// for (i = 1; i <= answer; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let array = [58, 78, 91, 1, 74, 26, 34, 34, 2, 69];
function findThirdHighest(array) {
  let changed = false;
  for (i = 0; i < array.length - 1; i++) {
    let currentNumber = array[i];
    let nextNumber = array[i + 1];
    if (currentNumber > nextNumber) {
      array[i + 1] = currentNumber;
      array[i] = nextNumber;
      changed = true;
    }
  }
  if (changed) {
    console.log(findThirdHighest(array));
    console.log(array[array.length - 3]);
  }
}

function findingThirdLargest() {
  let first = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      first = array[i];
    }
  }

  let second = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > second && array[i] < first) {
      second = array[i];
    }
  }

  let third = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > third && array[i] < second) {
      third = array[i];
    }
  }
  console.log(third);
}
