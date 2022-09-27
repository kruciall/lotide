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

module.exports = takeUntil;