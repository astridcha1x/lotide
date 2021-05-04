// -------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = require('./assertEqual');

// ---------- FUNCTION IMPLEMENTATION ---------- //

const head = function(newArray) {

  const checkArray = newArray;

  if (checkArray.length !== 0) {
    return checkArray[0];
  } else {
    return undefined;
  }

};

// ----------------- FUNCTION EXPORT ----------------- //

module.exports = head;