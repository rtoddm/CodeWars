// COUNT CHARACTERS IN YOUR STRING

// Link to original problem
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// Instructions
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution
function count(string) {
  let counts = {};
  let array = string.split("");

  for (let elem of array) {
    counts[elem] = (counts[elem] || 0) + 1;
  }

  return counts;
}
