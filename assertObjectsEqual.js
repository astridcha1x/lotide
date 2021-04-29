// ---------- EQOBJECTS IMPLEMENTATION ---------- //

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

// ---------- FUNCTION IMPLEMENTATION ---------- //

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`🙆 ✅ ASSERTION PASSED: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🙅 ❎ ASSERTION FAILED: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};


// ----------------- TEST CODE ----------------- //

const mankai = {
  leaders: ["Sakuya", "Tenma", "Banri", "Tsumugi"],
  plays: ["RomiJuli", "1000 Nights", "Picaresque", "Sympathy"]
}

const company = {
  leaders: ["Sakuya", "Tenma", "Banri", "Tsumugi"],
  plays: ["RomiJuli", "1000 Nights", "Picaresque", "Sympathy"]
}

console.log(assertObjectsEqual(mankai, company));