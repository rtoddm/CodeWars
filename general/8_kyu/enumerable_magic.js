// Enumerable Magic - Does My List Include This?

// Link to the original problem
// https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript

// Instructions
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// Solution
function include(arr, item) {
  return arr.indexOf(item) === -1 ? false : true;
}
