// BACKSPACES IN STRING

// Link to original problem
//  https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// Instructions
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// Solutions

// Solution #1
function cleanString(s) {
  let array = s.split("");
  let result = [];
  for (let elem of array) {
    if (elem !== "#") {
      result.push(elem);
    } else if (elem === "#") {
      result.pop();
    }
  }
  return result.join("");
}

// Solution #2
function cleanString(s) {
  return s
    .split("")
    .reduce((acc, elem) => {
      if (elem !== "#") acc.push(elem);
      if (elem === "#") acc.pop();

      return acc;
    }, [])
    .join("");
}
