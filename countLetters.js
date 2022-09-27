const string = "We are the champions Lighthouse in the house";
const countLetters = function(string) {
  const obj = {};
  const lowercaseString = string.toLowerCase();
  for (let c of lowercaseString) {
    if (c !== " ") {
      if (!obj[c]) {
        obj[c] = 0;
      }
      obj[c]++;
    }
  }
  return obj;
};

module.exports = countLetters;