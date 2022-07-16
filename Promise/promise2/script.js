async function get(url) {
  const requestURL = url;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const obj = response.json();
  return new Promise(function (resolve, reject) {
    console.log(obj);
  });
}

const promise = get(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
