const findKeyByValue = function (obj, str) {
  for (const key in obj) {
    if (obj[key] === str) {
      return key;
    }
  }
};

module.exports = findKeyByValue;