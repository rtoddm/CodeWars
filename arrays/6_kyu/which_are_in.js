// WHICH ARE IN

// Link to original problem
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

// Instructions
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Solutions

// Solution #1
function inArray(array1, array2) {
  return array1
    .filter((elem1) => {
      for (let elem2 of array2) {
        if (elem2.includes(elem1)) return true;
      }
      return false;
    })
    .sort();
}

// Solution #2
function inArray(array1, array2) {
  return array1
    .filter((elem1) => {
      return array2.some((elem2) => elem2.includes(elem1));
    })
    .sort();
}
