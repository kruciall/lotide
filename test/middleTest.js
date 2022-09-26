const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("[2,3]", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(middle(arr), [2,3]);
  });

  it("[3,4]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(arr), [3,4]);
  });

  it("[]", () => {
    const arr = [1];
    assert.deepEqual(middle(arr), []);
  });
});