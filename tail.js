// -------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = require('./assertEqual');

// ---------- FUNCTION IMPLEMENTATION ---------- //

const tail = function(newArray) {

  const index = newArray.index;

  if (index > -1) {
    newArray.splice(index, 1);
  }

  return newArray;

};

// ----------------- FUNCTION EXPORT ----------------- //

module.exports = tail;