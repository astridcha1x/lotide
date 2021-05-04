// ---------- FUNCTION IMPLEMENTATION ---------- //

const assert = require('chai').assert;
const tail = require('../tail');

// ----------------- TEST CODE ----------------- //

describe("#tail", () => {
  it("returns 3 for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);
  });
});