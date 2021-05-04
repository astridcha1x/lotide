// -------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = require('./assertEqual');

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

// ----------------- FUNCTION EXPORT ----------------- //

module.exports = eqArrays;