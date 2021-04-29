// --------- ASSERTEQUAL IMPLEMENTATION --------- //

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${actual} !== ${expected}`);
  }

};

// ---------- FUNCTION IMPLEMENTATION ---------- //

const findKeyByValue = function(myObject, myValue) {

  const keysArray = Object.keys(myObject);

  for (const element of keysArray) {
    if (myObject[element] === myValue) {
      return element;
    }
  }

};

// ----------------- TEST CODE ----------------- //

const mankaiCompanyTroupeLeaders = {
  spring: "Sakuya",
  summer: "Tenma",
  autumn: "Banri",
  winter: "Tsumugi"
};

assertEqual(findKeyByValue(mankaiCompanyTroupeLeaders, "Banri"), "autumn");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

