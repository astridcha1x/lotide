// --------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${actual} !== ${expected}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

const countOnly = function(allItems, itemsToCount) {

  let output = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (output[item]) {
        output[item] += 1;
      } else {
        output[item] = 1;
      }
    }

  }

  return output;

};

// ----------------- TEST CODE ----------------- //

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);