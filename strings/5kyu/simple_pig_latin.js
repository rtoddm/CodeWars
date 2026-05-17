// SIMPLE PIG LATIN

// Link to original problem
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Solution
function pigIt(str) {
  let split = str.split(" ");
  let newString = "";

  for (let elem of split) {
    let splitWord = elem.split("");
    let firstLetter = splitWord.shift();
    if (elem === "!" || elem === "?") {
      newString += " " + elem;
    } else {
      newString += " " + splitWord.join("") + firstLetter + "ay";
    }
  }

  return newString.trim();
}
