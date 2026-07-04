// MUMBLING

// Link to original problem
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// Instructions
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution
function accum(s) {
  let array = [];
  let finalArray = [];

  for (let i = 0; i < s.length; i++) {
    array.push(s[i].repeat(i + 1));
  }

  for (let string of array) {
    finalArray.push(
      string[0].toUpperCase() + string.substring(1).toLowerCase(),
    );
  }

  return finalArray.join("-");
}
