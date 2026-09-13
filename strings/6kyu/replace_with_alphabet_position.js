// REPLACE WITH ALPHABET POSITION

// Link to original problem
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Instructions
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// Solution
function alphabetPosition(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  for (let char of text) {
    if (letters.includes(char.toLowerCase())) {
      newString += letters.indexOf(char.toLowerCase()) + 1 + " ";
    }
  }
  return newString.trim();
}
