function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, `has logged in`);
};

User.prototype.logout = function () {
  this.online = true;
  console.log(this.email, `has logged out`);
};

function Admin(...args) {
  User.apply(this, args);
}

const userOne = new User("example@gmail.com", "Jakub");
const userTwo = new User("example@onet.pl", "Drozd");
const userThree = new Admin("admin@gmail.com", "Veanty");

console.log(userOne);
userTwo.login();

console.log(userThree);
