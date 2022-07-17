async function newGIF() {
  searchValue = search.value.trim();
  if (!searchValue) {
    img.src =
      "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640";
  }
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=daznyQmc4lCmAtHAMrcfRXm9cNggNKAS&s=${searchValue}`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    img.src = response.data.images.original.url;
  });
}

window.onload = newGIF;

const img = document.querySelector("img");

const search = document.querySelector("#search");

const button = document.createElement("button");
button.classList.add("newGIF");
button.textContent = `New GIF`;
document.querySelector(".container").appendChild(button);
button.addEventListener("click", newGIF);
