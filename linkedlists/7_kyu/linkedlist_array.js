// LinkedList --> Array

// Link to original problem
// https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript

// Instructions
// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here is an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function that converts a linked list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

//Solution
function listToArray(list) {
  let newArray = [];
  let current = list;

  while (current !== null) {
    newArray.push(current.value);
    current = current.next;
  }
  return newArray;
}
