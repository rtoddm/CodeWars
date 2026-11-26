// Format Words Into a Sentence

// Link to original problem
// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

// Instructions
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

// Solution
function formatWords(words) {
  if (words === null) return "";

  let newArray = [];

  for (let elem of words) {
    if (elem !== "") {
      newArray.push(elem);
    }
  }

  let string = "";

  for (let i = 0; i < newArray.length; i++) {
    if (i === newArray.length - 1) {
      string += newArray[i];
    } else if (i === newArray.length - 2) {
      string += newArray[i] + " " + "and" + " ";
    } else {
      string += newArray[i] + "," + " ";
    }
  }

  return string;
}
