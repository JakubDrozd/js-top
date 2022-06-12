const numbers = [1, -1, 2, 3];

const items = numbers
  .filter((number) => number >= 0)
  .map((number) => {
    return { value: number };
  })
  .filter((object) => object.value > 1)
  .map((object) => object.value);
