// Write Number in Expanded Form

// Link to original problem
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Instructions
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// Solution
function expandedForm(num) {
  let digits = num.toString().split("");
  let string = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "0") continue;
    string.push(digits[i] + "0".repeat(digits.length - (i + 1)));
  }
  return string.join(" + ");
}
