// A WOLF IN SHEEPS CLOTHING

// Link to original problem
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// Instructions
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// Solution
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf")
    return "Pls go away and stop eating my sheep";

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      return `Oi! Sheep number ${queue.length - (i + 1)}! You are about to be eaten by a wolf!`;
    }
  }
}
