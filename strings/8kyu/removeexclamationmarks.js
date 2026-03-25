// Remove Exclamation Marks

// Link to original problem
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// Instructions
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string

// Solution
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((elem) => elem !== "!")
    .join("");
}
