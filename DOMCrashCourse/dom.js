// // Examine the document object
// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello"
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

// console.log(document.images);

// console.log(document.getElementById("header-title"));

// const headerTitle = document.getElementById("header-title");
// // console.log(headerTitle);
// const header = document.getElementById("main-header");
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Hello Again";

// // headerTitle.innerHTML = "<h3>Hello!</h3>";

// header.style.borderBottom = "3px solid black";

// //GET ELEMENTS BY CLASS NAME

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// for (item of items) {
//   item.style.backgroundColor = "#f4f4f4";
// }
// items[1].textContent = "Selected";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "lightgreen";

// //QUERYSELECTOR

// const headerTwo = document.querySelector("#main-header");
// headerTwo.style.borderBottom = "3px solid lightgreen";

// let input = document.querySelector("input");
// input.style.color = "gray";
// input.value = `"Banana"`;

// let submit = document.querySelector(`input[type="submit"]`);
// submit.value = "Create";

// let itemTwo = document.querySelector(".list-group-item");
// itemTwo.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// let secondItem = document.querySelector(".list-group-item:nth-child(3)");
// secondItem.style.color = "orange";

// QUERYSELECTORALLY

// const titles = document.querySelectorAll(".title");
// console.log(titles);

// titles[0].textContent = "Type";
// titles[1].textContent = "By yourself";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");

// for (item of odd) {
//   item.style.backgroundColor = "#f4f4f4";
// }

// for (item of even) {
// //   item.style.backgroundColor = "#f5f5dc";
// // }

// //TRAVERSING THE DOM

// const itemList = document.querySelector("#items");

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// //parentELEMENT

// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// // child Nodes

// console.log(itemList.children);

// itemList.children[2].style.backgroundColor = "#f4f4f4";

// // first Child

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "Hello One!";

// itemList.lastElementChild.textContent = "Hello Last!";

// // next Sibling

// console.log(itemList.nextElementSibling);

// itemList.previousElementSibling.style.color = "green";

// // create Element

// const newDiv = document.createElement("div");

// //Add class

// newDiv.className = "Hello";
// // console.log(newDiv);

// // Add Id

// newDiv.id = "HelloID";
// // console.log(newDiv);

// newDiv.setAttribute("title", "NewId");
// // console.log(newDiv);

// //Create text node

// const newDivText = document.createTextNode("Hello World");

// // Add text to div

// newDiv.appendChild(newDivText);
// console.log(newDiv);

// // const mainHeader = document.querySelector("#main-header");

// // newDiv.style.fontSize = "30px";

// // mainHeader.appendChild(newDiv);

// const button = document
//   .querySelector("#button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.className);
//   //   console.log(e.target.classList);
//   //   const output = document.querySelector("#output");
//   //   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   //   console.log(e.type);
//   //   console.log(e.offsetX, e.offsetY);
//   //   console.log(e.altKey);
//   //   console.log(e.ctrlKey);
//   //   console.log(e.shiftKey);

// }

const button = document.querySelector("#button");

button.addEventListener("mouseup", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
  //   output.textContent = `X: ${e.offsetX} | Y: ${e.offsetY}`;
  console.log(e.target.value);
  document.querySelector("#output").innerHTML = `<h3>${e.target.value}</h3>`;
}

const box = document.querySelector("#box");

// box.addEventListener("mousemove", runEvent);

const itemInput = document.querySelector(`input[type="text"]`);
const form = document.querySelector("form");

itemInput.addEventListener("input", runEvent);

const select = document.querySelector("select");

select.addEventListener("change", runEvent);
select.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);
