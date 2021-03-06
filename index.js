// ---------- FUNCTION IMPLEMENTATION ---------- //

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('.without');

// --------------- OBJECT EXPORT --------------- //

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};