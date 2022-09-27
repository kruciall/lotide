const assert = require('chai').assert;
const without = require('../without');

describe ("#without", () => {
  it("should return [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['1', '2'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  const words = ["hello", "world", "lighthouse"];
  it("should return [ 'hello', 'world' ])", () => {
    assert.deepEqual(without(words, [ "lighthouse" ]), [ "hello", "world" ]);
  });
});