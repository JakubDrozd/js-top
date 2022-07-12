const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((item) => item > 0);

const items = filtered
  .map((item) => {
    return { value: item };
  })
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
