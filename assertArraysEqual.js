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


assertArraysEqual([1,4,2,3],[1,3,4,3]);
assertArraysEqual([1,4,2,3],[1,4,2,3]);
assertArraysEqual(["Hello", "Vinson"],["Hello", "Vinson", "Wong"]);
assertArraysEqual(["Hello", "Wong"],["Hello", "Vinson"]);
assertArraysEqual(["Hello", "Wong"],["Hello", "Wong"]);
assertArraysEqual(["Hello", "Wong"],["Wong", "Hello"]);
