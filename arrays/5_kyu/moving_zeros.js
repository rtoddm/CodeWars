// MOVING ZEROS TO THE END

// Link to original problem
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Instructions
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Solutions

// Solution #1
function moveZeros(arr) {
  let zeros = [];
  let others = [];

  for (let elem of arr) {
    if (elem === 0) zeros.push(elem);
    if (elem !== 0) others.push(elem);
  }

  return [...others, ...zeros];
}

// Solution #2
function moveZeros(arr) {
  let others = arr.filter((elem) => elem !== 0);

  let zeros = arr.filter((elem) => elem === 0);

  return [...others, ...zeros];
}
