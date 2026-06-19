// CORRECT THE MISTAKES OF THE CHARACER RECOGNITION SOFTWARE

// Link to the original problem
//https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

// Instructions
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Solution
function correct(string) {
  let firstString = string.replaceAll(5, "S");
  let secondString = firstString.replaceAll(0, "O");
  let thirdString = secondString.replaceAll(1, "I");
  return thirdString;
}
