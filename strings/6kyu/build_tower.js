// BUILD TOWER

// Link to original problem
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Instructions
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// Solution
function towerBuilder(nFloors) {
  let tree = [];
  let string = "";

  for (let i = 1; i <= nFloors; i++) {
    let spaces = " ".repeat(nFloors - i);
    let stars = "*".repeat(i * 2 - 1);
    string = spaces + stars + spaces;
    tree.push(string);
  }
  return tree;
}
