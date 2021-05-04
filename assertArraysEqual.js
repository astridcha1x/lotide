// ---------- EQARRAYS IMPLEMENTATION ---------- //

const eqArrays = require('./eqArrays');

// ---------- FUNCTION IMPLEMENTATION ---------- //

const assertArraysEqual = function(firstArray, secondArray) {

  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${firstArray} === ${secondArray}`);
  } else if (eqArrays(firstArray, secondArray) === false) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${firstArray} !== ${secondArray}`);
  }

};

// ----------------- FUNCTION EXPORT ----------------- //

module.exports = assertArraysEqual;