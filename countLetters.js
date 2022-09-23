const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

console.log(countLetters(string));

const result = countLetters("Hello World");
console.log(result);