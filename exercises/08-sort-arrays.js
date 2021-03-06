// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']
function alphaSort (aplha) {
  return aplha.sort()
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']
function strLengthSort (strings) {
  return strings.sort(function (a, b) { return a.length - b.length })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]
function sumSort (numArray) {
  numArray.sort(function (a, b) {
    let sum1 = sum(a)
    let sum2 = sum(b)
    if (sum1 < sum2) {
      return -1
    } else {
      return 0
    }
  })
}

function sum (array) {
  let sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

