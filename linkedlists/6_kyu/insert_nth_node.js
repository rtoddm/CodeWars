// INSERT Nth NODE

// Link to original problem
// https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript

// Instructions
// Implement a function which inserts a new node at any index within a list.

// Given a list, an index n in the range 0..length, and a data element, insert a node in list at index n containing data. Your function should return the head of the list.

// //    list            n data
// (1 -> 2 -> 3 -> null, 0, 7) ==> 7 -> 1 -> 2 -> 3 -> null
// (1 -> 2 -> 3 -> null, 1, 7) ==> 1 -> 7 -> 2 -> 3 -> null
// (1 -> 2 -> 3 -> null, 3, 7) ==> 1 -> 2 -> 3 -> 7 -> null
// You must throw/raise an exception (specifically ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

// Solution
function insertNth(head, index, data) {
  let newNode = new Node(data);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index - 1) {
      newNode.next = current.next;
      current.next = newNode;
      return head;
    }
    count++;
    current = current.next;
  }

  throw new Error("Oh no! Look what happened!");
}
