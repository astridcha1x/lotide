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

const letterPositions = function(sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== "") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;

};

// ----------------- TEST CODE ----------------- //

console.log(assertArraysEqual(letterPositions("hello").e, [1]));