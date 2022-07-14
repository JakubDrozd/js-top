const form = document.querySelector("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const comment = document.getElementById("comment");

uname.addEventListener("input", function (e) {
  if (!uname.validity.valid) {
    showError();
  }
});

email.addEventListener("input", function (e) {
  if (!email.validity.valid) {
    showError();
  }
});

phone.addEventListener("input", function (e) {
  if (!phone.validity.valid) {
    showError();
  }
});

form.addEventListener("submit", function (e) {
  if (!uname.validity.valid || !email.validity.valid || !phone.validity.valid) {
    e.preventDefault();
    showError();
  }
});

function showError() {}

const checkUname = () => {
  if (uname.value.length === 0) {
    uname.setCustomValidity(`Please enter your user name`);
    uname.reportValidity();
  } else if (uname.validity.patternMismatch) {
    uname.setCustomValidity(`Incorrect format, example: a.abc123`);
    uname.reportValidity();
  } else {
    uname.setCustomValidity("");
  }
};

const checkEmail = () => {
  if (email.value.length === 0) {
    email.setCustomValidity(`Please enter your email address`);
    email.reportValidity();
  } else if (email.validity.patternMismatch) {
    email.setCustomValidity(`Incorrect email address`);
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
};

const checkPhone = () => {
  if (phone.value.length === 0) {
    phone.setCustomValidity(`Please enter your phone number`);
    phone.reportValidity();
  } else if (phone.validity.patternMismatch) {
    phone.setCustomValidity(`Incorrect phone number`);
    phone.reportValidity();
  } else {
    phone.setCustomValidity("");
  }
};
