const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }

  form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "Please enter your email address";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an e-mail address";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters long (you have entered ${email.value.length})`;
    }
  }
  emailError.className = "error active";
});
