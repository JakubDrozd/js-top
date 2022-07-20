const orderTotal = require("./ordertotal");

it("Quantity", () => {
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
    })
  ).toBe(6);
});
