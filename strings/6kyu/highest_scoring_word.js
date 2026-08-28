// HIHGHEST SCORING WORD

// Link to the original problem
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Instructions
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// Solution
function high(x) {
  let bestSoFar = 0;
  let wordTotal = 0;
  let highestWord;

  let array = x.split(" ");

  for (let word of array) {
    wordTotal = 0;

    for (let i = 0; i < word.length; i++) {
      wordTotal += word.charCodeAt(i) - 96;
    }

    if (wordTotal > bestSoFar) {
      bestSoFar = wordTotal;
      highestWord = word;
    }
  }

  return highestWord;
}
