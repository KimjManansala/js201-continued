// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max (arrayOfNums) {
  let max = 0
  for (let i = 0; i <= arrayOfNums.length; i++) {
    console.log(arrayOfNums[i])
    if (arrayOfNums[i] >= max) {
      max = arrayOfNums[i]
    }
  }
  return max
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which takes an array of numbers and returns a
// new array containing only the positive numbers in the given array.

function positives (arrayOfNums) {
  let positivesArray = []
  for (let i = 0; i <= arrayOfNums.length + 1; i++) {
    if (arrayOfNums[i] > 0) {
      positivesArray.push(arrayOfNums[i])
    }
  }
  return positivesArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ls~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens (number) {
 let onlyEvens = []
  for (let i = 0; i < number.length; i++) {
    if (isEven(number[i])) {
      onlyEvens.push(number[i])
    }
  }
  return onlyEvens
}

function isEven (number) {
  if (typeof number !== 'number') return false
  switch (Math.abs(number % 2)) {
    case 0:
      return true
    default:
      return false
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds (number) {
 let onlyOdds = []
  for (let i = 0; i < number.length; i++) {
    if (isOdd(number[i])) {
      onlyOdds.push(number[i])
    }
  }
  return onlyOdds
}

function isOdd (number) {
  if (typeof number !== 'number') return false
  switch (Math.abs(number % 2)) {
    case 1:
      return true
    default:
      return false
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (numbers) {
  let integersArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 === 0) {
      integersArray.push(numbers[i])
    }
  }
  return integersArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (numbs) {
  for (let i = 0; i < numbs.length; i++) {
    numbs[i] = Math.pow(numbs[i], 2)
  }
  return numbs
}
