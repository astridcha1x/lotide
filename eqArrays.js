// -------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${actual} !== ${expected}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

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

// ----------------- TEST CODE ----------------- //

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));