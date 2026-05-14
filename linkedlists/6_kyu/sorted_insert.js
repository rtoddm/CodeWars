// LINKED LISTS - SORTED INSERT

// Link to original problem
// https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript

// Instructions
// Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

// sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)

// Solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  let current = head;
  let newNode = new Node(data);

  if (head === null) {
    return newNode;
  }

  if (newNode.data < current.data) {
    newNode.next = current;
    return newNode;
  }

  while (current.next !== null && current.next.data < data) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;
  return head;
}
