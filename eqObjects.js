// --------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${actual} !== ${expected}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

const eqObjects = function(objectOne, objectTwo) {

  const firstObject = Object.keys(objectOne);
  const secondObject = Object.keys(objectTwo);
  let output = false;

  if (firstObject.length === secondObject.length) {
    output = true;
  }

  for (let key in firstObject) {
    if (firstObject[key] === secondObject[key]) {
      output = true;
    }
  }

  return output;

};

// ----------------- TEST CODE ----------------- //

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); // => false