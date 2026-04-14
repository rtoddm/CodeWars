// LINKED LISTS APPEND

// Link to original problem
// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

// Instructions
// Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  let current = listA;

  if (listA === null) return listB;
  if (listB === null) return listA;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = listB;
  return listA;
}
