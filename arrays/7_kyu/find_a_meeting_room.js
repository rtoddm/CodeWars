// TRAINING ON THE OFFICE IV - FIND A MEETING ROOM

// Link to the original problem
// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

// Instructions
// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// Solution
function meeting(x) {
  return x.indexOf("O") === -1 ? "None available!" : x.indexOf("O");
}
