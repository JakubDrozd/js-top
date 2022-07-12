const dropBtn = document.querySelector(".dropBtn");

dropBtn.addEventListener("click", function () {
  this.parentElement.querySelector(".dropContent").classList.toggle("active");
});
