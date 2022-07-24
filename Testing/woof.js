function woof(string) {
  if (typeof string !== "string") {
    return null;
  }
  return string.length + "woof";
}

module.exports = woof;
