const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1,arr2) {
  if (!eqArrays(arr1,arr2)) {
    console.log("These two Arrays are NOT equal"); //checks both arrays, if length is not equal = false
    return;
  } else {
    console.log("These two arrays are equal");
    return;
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "bowie"];
const words3 = ["ground", "control", "to", "major", "bob"];

assertArraysEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words2, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words3, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);