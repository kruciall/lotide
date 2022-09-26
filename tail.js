const assertEqual = require('../assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  return (console.log(newArray));
};

module.exports = tail;
