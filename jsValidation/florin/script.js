const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, `Username cannot be blank`);
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, `Email cannot be blank`);
  } else if (!emailReg.test(emailValue)) {
    setErrorFor(email, `Incorrect email address`);
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, `Password cannot be blank`);
  } else if (!passwordReg.test(passwordValue)) {
    setErrorFor(password, `Password is too weak`);
  } else {
    setSuccessFor(password);
  }

  if (passwordValue === "" && password2Value === "") {
    return;
  } else if (
    !passwordReg.test(passwordValue) &&
    password2Value === passwordValue
  ) {
    setErrorFor(password2, `Password is too weak`);
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, `Passwords do not match`);
  } else {
    setSuccessFor(password2);
  }

  if (
    username.parentElement.className === "form-control success" &&
    email.parentElement.className === "form-control success" &&
    password.parentElement.className === "form-control success" &&
    password2.parentElement.className === "form-control success"
  ) {
    alert("Success!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = `form-control error`;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = `form-control success`;
}
