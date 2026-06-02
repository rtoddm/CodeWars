// FAKE BINARY

// Link to original problem
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// Instructions
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Solutions

// Solution 1
function fakeBin(x) {
  let newString = "";
  let array = x.split("");
  for (let elem of array) {
    elem < 5 ? (newString += "0") : (newString += "1");
  }
  return newString;
}

// Solution 2
function fakeBin(x) {
  let result = "";
  for (let char of x) {
    char < 5 ? (result += "0") : (result += "1");
  }
  return result;
}

// Solution 3
function fakeBin(x) {
  return x
    .split("")
    .map((elem) => {
      return elem < 5 ? "0" : "1";
    })
    .join("");
}
