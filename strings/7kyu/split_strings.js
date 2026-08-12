// SPLIT STRINGS

// Link to original problem
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Instructions
// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Solution
function solution(str) {
  let array = str.split("");
  let newArray = [];

  console.log("Array1:", array);

  for (let i = 0; i < str.length / 2; i++) {
    let removed = array.splice(0, 2).join("");
    newArray.push(removed);
  }

  if (str.length % 2 !== 0) {
    newArray[newArray.length - 1] = newArray[newArray.length - 1] + "_";
  }
}
