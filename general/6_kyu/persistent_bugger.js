// PERSISTENT BUGGER

// Link to original problem
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// Instructions
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// Solution

// Option 1: Recursion
function persistence(num) {
  if (num > 9) {
    let array = Array.from(String(num), Number);

    let result = array.reduce((acc, elem) => {
      return acc * elem;
    }, 1);

    return 1 + persistence(result);
  }

  return 0;
}

// Option 2: Recursion with state (default perameter)
function persistence(num, count = 0) {
  if (num > 9) {
    let array = Array.from(String(num), Number);

    let result = array.reduce((acc, elem) => {
      return acc * elem;
    }, 1);

    return persistence(result, count + 1);
  }

  return count;
}

// Option 3: While Loop
function persistence(num) {
  let count = 0;

  while (num > 9) {
    count++;
    let array = Array.from(String(num), Number);

    num = array.reduce((acc, elem) => {
      return acc * elem;
    }, 1);
  }

  return count;
}
