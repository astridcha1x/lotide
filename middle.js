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

const middle = function(array) {

  let midArray = [];
  let midPoint = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[midPoint - 1]);    
    midArray.push(array[midPoint]);
  } else {
    midArray.push(array[midPoint]);
  }
  
  return midArray;

};

// ----------------- TEST CODE ----------------- //

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);