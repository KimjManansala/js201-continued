// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(word) {
  var splitWord = word.split('')
  var reverseWord = splitWord.reverse()
  var joinSplitWord = reverseWord.join("")
  return joinSplitWord
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(words) {
  var longestWord = ''
  var wordSplit = words.split(" ")

  for (var i = 0; i < wordSplit.length; i++) {
    if (longestWord.length < wordSplit[i].length) {
      longestWord = wordSplit[i]
    }
  }
  return longestWord
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(sentence) {
  var splitSenetence = sentence.split(" ")
  for (var i = 0; i < splitSenetence.length; i++) {
    switch (splitSenetence[i]) {
      case "heck":
        splitSenetence.splice(i,1);
        break;
      case "darn":
        splitSenetence.splice(i,1);
        break;
      case "dang":
        splitSenetence.splice(i,1);
        break;
      case "crappy":
        splitSenetence.splice(i,1);
        break;
      default:
        break;
    }
  }
  var nicerSentence = splitSenetence.join(" ")
  return nicerSentence

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(sentence) {
    var arraySentence = sentence.split(" ")
    for(var i = 0; i < arraySentence.length; i++){
        arraySentence[i] = arraySentence[i].substring(0,1).toUpperCase() + arraySentence[i].substring(1,arraySentence[i].length)
    }
    var capitalSentence = arraySentence.join(" ")
    return capitalSentence
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(string, delimiter) {
    splitArray = []
    for(var i = 0; i < string.length; i++){
        if(string.substring(i,delimiter.length) === delimiter){
            
        }
        break;
    }
    return splitArray
//Needs work
}

