const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1,arr2) {
  if (!eqArrays(arr1,arr2)) {
    console.log("These two Arrays are NOT equal");
    return;
  } else {
    console.log("These two arrays are equal");
    return;
  }
};

module.exports = assertArraysEqual;