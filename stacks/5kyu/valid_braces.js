// VALID BRACES

// Link to original problem
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// Instructions
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Solution
function validBraces(braces) {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let array = braces.split("");
  let stack = [];
  let lastOpening;

  for (let elem of array) {
    if (elem === "(" || elem === "[" || elem === "{") {
      stack.push(elem);
    } else if (elem === ")" || elem === "]" || elem === "}") {
      lastOpening = stack.pop();
      if (brackets[lastOpening] !== elem) return false;
    }
  }

  return stack.length === 0;
}
