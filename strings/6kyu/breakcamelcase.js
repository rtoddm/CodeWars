// BREAK CAMEL CASE

// Link to original problem
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Instructions
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution

function solution(string) {
  if (string.length === 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      result += " " + string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}
