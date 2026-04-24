// SUM OF DIGITS - DIGITAL ROOTS

// Link to original problem
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// Instructions

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Solution
function digitalRoot(n) {
  let sum = 0;
  let array = n.toString().split("");

  if (n < 10) return n;

  if (array.length > 1) {
    for (let elem of array) {
      sum += parseInt(elem);
    }
  }

  if (sum > 9) {
    return digitalRoot(sum);
  } else {
    return sum;
  }
}
