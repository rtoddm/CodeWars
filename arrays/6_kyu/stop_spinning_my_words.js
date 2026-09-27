// STOP SPINNING MY WORDS

// Link to original problem
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Instructions
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Words will be separated by exactly one space. There will be no leading or trailing spaces.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// Solutions

// Solution #1
function spinWords(string) {
  const array = string.split(" ");
  const jumbled = [];

  for (let elem of array) {
    if (elem.length >= 5) {
      const reversed = elem.split("").reverse().join("");
      jumbled.push(reversed);
    } else {
      jumbled.push(elem);
    }
  }

  return jumbled.join(" ");
}

// Solution #2
function spinWords(string) {
  const array = string.split(" ");

  return array
    .map((elem) => {
      let newString = "";
      if (elem.length >= 5) {
        for (let i = elem.length - 1; i >= 0; i--) {
          newString += elem[i];
        }
      } else {
        newString += elem;
      }
      return newString;
    })
    .join(" ");
}
