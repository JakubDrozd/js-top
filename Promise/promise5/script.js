const getUserData = () => {
  setTimeout(() => {
    console.log("1. get user data");
  }, 800);
};

const validateData = () => {
  setTimeout(() => {
    console.log("2. validate");
  }, 900);
};

const registerUser = () => {
  setTimeout(() => {
    console.log("3. register");
  }, 400);
};

const sendEmail = () => {
  setTimeout(() => {
    console.log("4. send email");
  }, 200);
};

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("working...");
    resolve(2);
  }, 800);
})
  .then((response) => {
    console.log("end!");
    return response;
  })
  .then((response) => {
    console.log(response);
  });
