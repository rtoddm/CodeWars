// DISEMVOWEL TROLLS

// Link to the original problem
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// Instructions
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// Solution

// Solution #1
function disemvowel(str) {
  let array = str.split("");

  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let filtered = array.filter((elem) => {
    return !vowels.includes(elem);
  });

  return filtered.join("");
}

// Solution #2
function disemvowel(str) {
  let vowels = "aeiouAEIOU";

  return str
    .split("")
    .filter((elem) => !vowels.includes(elem))
    .join("");
}
