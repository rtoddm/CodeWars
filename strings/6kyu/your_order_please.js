// YOUR ORDER PLEASE

// Link to orignal problem
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Instructions
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Solution
function order(words) {
  if (words.length === 0) return "";

  let split = words.split(" ");
  let newArray = new Array(split.length);

  for (let word of split) {
    for (let char of word) {
      if (Object.is(Number(char), NaN) === false) {
        newArray[Number(char) - 1] = word;
      }
    }
  }
  return newArray.join(" ");
}
