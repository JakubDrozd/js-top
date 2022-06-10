let newVariable = "Number";

let Id = 1;

let user = {
  Id: 1,
  name: "Veanty",
  profession: "Hunter",
  isAdmin: true,
  ["favorite" + newVariable]: 4,
};

function makeUser(name, profession) {
  return {
    Id: ++Id,
    name,
    profession,
    isAdmin: false,
    favoriteNumber: Math.floor(Math.random() * (30 - 1) + 1),
  };
}

let gum4 = makeUser("Gum4", "Mage");
let seb4 = makeUser("Seb4", "Berserker");

for (let properties in gum4) {
  console.log(properties);
}
