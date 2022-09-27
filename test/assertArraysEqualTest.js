const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,4,2,3],[1,3,4,3]);
assertArraysEqual([1,4,2,3],[1,4,2,3]);
assertArraysEqual(["Hello", "Vinson"],["Hello", "Vinson", "Wong"]);
assertArraysEqual(["Hello", "Wong"],["Hello", "Vinson"]);
assertArraysEqual(["Hello", "Wong"],["Hello", "Wong"]);
assertArraysEqual(["Hello", "Wong"],["Wong", "Hello"]);
