function orderTotal(order) {
  return order.items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
}

module.exports = orderTotal;
