const assertEqual = require('../assertEqual');
const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

const word = ["One"];
tail(word);
assertEqual(word.length, 1);
assertArraysEqual(tail(word), ["One"]);



const empty = [];
tail(empty);
assertEqual(empty.length, 0);
assertArraysEqual(tail(empty), []);