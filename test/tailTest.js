const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);

const word = ["One"];
tail(word);
assertEqual(word.length, 1);

const empty = [];
tail(empty);
assertEqual(empty.length, 0);