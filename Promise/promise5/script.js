const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. get user data");
      resolve();
    }, 800);
  });
};

const validateData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. validate");
      resolve();
    }, 900);
  });
};

const registerUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. register");
      resolve();
    }, 400);
  });
};

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4. send email");
      resolve();
    }, 200);
  });
};

getUserData().then(validateData).then(registerUser).then(sendEmail);
