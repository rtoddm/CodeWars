// MULTIPLES OF 3 OR 5

// Link to original problem
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// Instructions
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If a number is a multiple of both 3 and 5, only count it once.

// Solution
// - initial solution using array + reduce
// - refactored to single-pass loop with sum accumulator
// - improved readability and performance

function solution(number) {
  let array = [];

  for (let i = number - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }

  return array.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}
