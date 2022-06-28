const Car = function (color) {
  this.color = color;
};

Car.prototype = {
  getColor() {
    return this.color;
  },
};

const ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();
