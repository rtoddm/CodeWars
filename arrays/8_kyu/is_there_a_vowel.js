// IS THERE A VOWEL IN THERE

// Link to original problem
// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

// Instructions
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// Solutions

// Solution #1 - Loop
function isVow(a) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let elem of a) {
    let convert = String.fromCharCode(elem);
    if (vowels.includes(convert)) {
      result.push(convert);
    } else {
      result.push(elem);
    }
  }
  return result;
}

// Solution #2 - Map Method
function isVow(a) {
  let vowels = "aeiou";

  return a.map((elem) => {
    let char = String.fromCharCode(elem);
    return vowels.includes(char) ? char : elem;
  });
}
