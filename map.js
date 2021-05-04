// - EQARRAYS & ASSERTARRAYSEQUAL IMPLEMENTATION - //

const eqArrays = function(firstArray, secondArray) {

  if (firstArray === secondArray) {
    return true;
  } else if (firstArray.length !== secondArray.length) {
    return false;
  } else if (firstArray === null || secondArray === null) {
    return false;
  }

  return true;

};

const assertArraysEqual = function(firstArray, secondArray) {

  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${firstArray} === ${secondArray}`);
  } else if (eqArrays(firstArray, secondArray) === false) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${firstArray} !== ${secondArray}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

const map = function(array, callback) {

  const output = [];

  for (const item of array) {
    output.push(callback(item));
  }

  return output;

};

// ----------------- TEST CODE ----------------- //

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

const words = ["ground", "control", "to", "major", "tom"];

console.log(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]));