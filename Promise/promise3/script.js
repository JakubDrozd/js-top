let promise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve(`success`);
  } else {
    reject(`fail`);
  }
});

promise
  .then((message) => {
    //Run for resolve
    console.log(`This is in the then  ${message}`);
  })
  .catch((error) => {
    //Run for reject
    console.log(`This is in catch ${error}`);
  });

let userLeft = false;
let userWatchingCatMeme = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching cat meme",
        message: "Me < Cat",
      });
    } else {
      resolve(`Still watching :D`);
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve(`Video 1 recorded`);
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve(`Video 2 recorded`);
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve(`Video 3 recorded`);
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => console.log(message)
);
