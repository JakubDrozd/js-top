const form = document.querySelector("#addForm");

const itemList = document.querySelector("ul");

form.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();

  //SELECTING LIST
  let newItem = document.querySelector("#item").value;

  //CREATE ITEM
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  // CREATE DELETE BUTTON
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("X"));
  li.appendChild(deleteButton);
}

itemList.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

const filter = document.querySelector("#filter");

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
