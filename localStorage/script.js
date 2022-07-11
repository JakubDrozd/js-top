const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const insertBtn = document.getElementById("insertButton");
const output = document.getElementById("output");

insertBtn.addEventListener("click", () => {
  if (inputKey.value && inputValue.value) {
    localStorage.setItem(inputKey.value, inputValue.value);
  } else {
    return;
  }
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  output.innerHTML += `${key}: ${value}<br>`;
}
