const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  // now we need to compare both objects length
  if (arr1.length !== arr2.length)
    return false;
  for (let key of arr1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    } else if (object1[key] !== object2[key])
      return false;
  }
  return true;
};

module.exports = eqObjects;