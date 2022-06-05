const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

admitted.textContent = "Admitted: ";
refused.textContent = "Refused: ";

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${person} `;
  } else {
    admitted.textContent += `${person} `;
  }
}
