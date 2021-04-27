// --- EQARRAYS + ASSERTARRAYSEQUAL IMPLEMENTATION --- //

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

const without = function(source, itemsToRemove) {

  let output = [];

  for (let i = 0; source.length; i++) {
    if (source[i] !== itemsToRemove) {
      output.push(source[i]);
    }
  }

  return output;

};