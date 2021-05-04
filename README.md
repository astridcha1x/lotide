# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @astridcha1x/lotide`

**Require it:**

`const _ = require('@astridcha1x/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: compares two values to see whether or not they're equal
* `assertArraysEqual`: compares two arrays to see whether or not they're equal
* `assertObjectsEqual`: compares two objects to see whether or not they're equal
* `countLetters`: returns the number count of letters in a given string
* `countOnly`: returns counts for a specific subset of given items
* `eqArrays`: compares two arrays
* `eqObjects`: compares two objects
* `findKey`: returns the first key for which the callback returns a truthy value
* `findKeyByValue`: searches for a key on an object where its value matches a given value
* `head`: returns the first item in a given array
* `middle`:returns the middle item in a given array (if applicable)
* `tail`: returns the rest of the elements in an array after the head
* `index`: a list of all of the functions in an object
* `letterPositions`: returns all indices in the string where each character is found
* `map`: creates new array with the results of calling a provided function on every element in the calling array
* `takeUntil`: returns a "slice of the array with elements taken from the beginning"
*  `without`: removes elements from an array