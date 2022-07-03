function solution(number) {
  if (number < 0) {
    return 0;
  }
  if (number === 0) {
    return 0;
  } else if (number >= 0) {
    const array = [];
    for (let i = 1; i < number; i++) {
      array.push(i);
    }
    const threeAndFive = array.filter((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        return true;
      } else if (number % 5 === 0) {
        return true;
      } else if (number % 3 === 0) {
        return true;
      } else {
        return false;
      }
    });
    const sum = threeAndFive.reduce((total, number) => total + number, 0);
    return sum;
  }
}

class Clock {
  constructor({ template }) {
    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;

      let output = template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);

      console.log(output);
    }

    this.stop = function () {
      clearInterval(timer);
    };

    this.start = function () {
      render();
      timer = setInterval(render, 1000);
    };
  }
}
