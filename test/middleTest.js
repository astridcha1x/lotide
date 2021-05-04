// ---------- FUNCTION IMPLEMENTATION ---------- //

const assert = require('chai').assert;
const middle = require('../middle');

// ----------------- TEST CODE ----------------- //

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]));
  });
});