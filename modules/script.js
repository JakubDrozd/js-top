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
