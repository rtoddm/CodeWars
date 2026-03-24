// MUMBLING

// Link to the original problem
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
  let newArray = [];
  for (let i = 0; i < s.length; i++) {
    newArray.push(s[i].repeat(i + 1));
  }
  let capitalized = [];
  for (let elem of newArray) {
    capitalized.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase());
  }

  return capitalized.join("-");
}
