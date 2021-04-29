// --------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${actual} !== ${expected}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

const countLetters = function(sentence) {

  const output = {};

  for (const letters of sentence) {
    if (sentence[letters]) {
      output[letters] += 1;
    } else if (output[letters] > 0) {
      output[letters] += 1;
    } else {
      output[letters] = 1;
    }
  }

  return output;

};

// ----------------- TEST CODE ----------------- //

console.log(countLetters('lighthouse in the house'));