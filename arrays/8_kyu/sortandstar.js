// SORT AND STAR

// Link to the original problem:
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// Instructions

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Solution

function twoSort(s) {
  let sorted = s.sort();
  let string = sorted[0].split("").join("***");
  return string;
}
