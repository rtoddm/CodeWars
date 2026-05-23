// MOVE NODE

// Link to original problem
// https://www.codewars.com/kata/55da347204760ba494000038/train/javascript

// Instructions
// Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.

// Solution
function moveNode(source, dest) {
  let movedNode = source;
  source = source.next;
  movedNode.next = dest;
  dest = movedNode;
  return new Context(source, dest);
}
