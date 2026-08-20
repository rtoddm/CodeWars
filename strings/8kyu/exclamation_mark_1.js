// EXCLAMATION MARK SERIES #1

// Link to Original Problem
// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

// Instructions
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// Solution
function remove(string) {
  if (string[string.length - 1] === "!") {
    let array = string.split("");
    array.pop();
    return array.join("");
  } else {
    return string;
  }
}
