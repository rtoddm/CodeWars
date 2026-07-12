// UNIQUE IN ORDER

// Link to original problem
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Instructions
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Solution
var uniqueInOrder = function (iterable) {
  if (iterable.length === 0) return [];

  let newArray = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] === newArray[newArray.length - 1]) continue;
    newArray.push(iterable[i]);
  }
  return newArray;
};
