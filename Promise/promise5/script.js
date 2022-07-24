const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. get user data");
      resolve({ name: "Jon" });
    }, 800);
  });
};

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. register");
      resolve({ name: user.name, id: 1 });
    }, 400);
  });
};

const sendEmail = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`3. Email sent by ${user.name} [${user.id}]`);
      resolve();
    }, 200);
  });
};

// getUserData()
//   .then((userData) => {
//     return registerUser(userData);
//   })
//   .then((registeredUser) => {
//     return sendEmail(registeredUser);
//   })
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

async function sendUserEmail() {
  const userData = await getUserData();
  const registeredUser = await registerUser(userData);
  await sendEmail(registeredUser);

  console.log("Operation successful");
}

sendUserEmail();
console.log("render page");
console.log("display page");
