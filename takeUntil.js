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

const takeUntil = function(array, callback) {
  const results = [];

  for (const item of array) {
    const status = callback(item);
    if (status) {
      return results;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 2);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual,(results1 [ 1, 2, 5, 4, 7, 2, -1 ]);
