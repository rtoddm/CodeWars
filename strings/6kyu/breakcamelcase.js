// BREAK CAMEL CASE

// Link to original problem
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Instructions
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solutions

// Solution #1
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

// Solution #2
function solution(string) {
  let newString = "";
  const split = string.split("");

  for (let i = 0; i < split.length; i++) {
    newString += split[i];

    if (split[i + 1] !== undefined) {
      if (split[i + 1] === split[i + 1].toUpperCase()) {
        newString += " ";
      }
    }
  }
  return newString;
}
