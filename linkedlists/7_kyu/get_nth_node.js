// LINKED LISTS - GET NTH NODE

// Link to original problem
// https://www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript

// Instructions
// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

// So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2
// The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).

// Solutions

// Solution #1
function getNth(node, index) {
  let current = node;
  let count = 0;

  if (!node) throw new Error("This is an error message.");

  while (current !== null) {
    if (count === index) {
      return current;
    }
    count++;
    current = current.next;
  }
  throw new Error("Index out of range.");
}

// Solution #2
function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  let current = node;

  while (current) {
    if (index === 0) return current;
    index--;
    current = current.next;
  }

  throw new Error("Ooops! Invalid index!");
}
