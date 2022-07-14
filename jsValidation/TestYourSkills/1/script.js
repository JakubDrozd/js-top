const form = document.querySelector("form");

const uname = document.querySelector("#uname");

const email = document.getElementById("email");

const phone = document.querySelector("#phone");

uname.addEventListener("input", function (e) {
  if (uname.validity.tooShort) {
    uname.setCustomValidity(`User name too short! (minimum 5 characters)`);
    uname.reportValidity();
  } else if (uname.validity.tooLong) {
    uname.setCustomValidity(`User name too long! (maximum 20 characters)`);
    uname.reportValidity();
  } else {
    uname.setCustomValidity("");
  }
});
