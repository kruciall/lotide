const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [Two]", () => {
    const words = ["One", "Two"];
    assert.deepEqual(tail(words), ["Two"]);
  });

  it("returns the last two elements in the array, Lighthouse, Labs", () => {
    const words = ["Yo yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});