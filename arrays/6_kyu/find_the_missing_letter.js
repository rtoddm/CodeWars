// FIND THE MISSING LETTER

// Link to original problem
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

// Instructions
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// Solution
function findMissingLetter(array) {
  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let array2 = array.map((elem) => elem.toLowerCase());
  let startingPoint = letters.indexOf(array2[0]);

  for (let i = startingPoint; i < letters.length; i++) {
    if (array2.includes(letters[i])) {
      continue;
    } else if (array[0] === array[0].toUpperCase()) {
      return letters[i].toUpperCase();
    } else {
      return letters[i];
    }
  }
}
