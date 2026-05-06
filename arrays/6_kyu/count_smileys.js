// COUNT THE SMILEY FACES

// Link to original problem
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Instructions
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Solutions

// First Solution
function countSmileys(arr) {
  if (arr.length === 0) return 0;

  let validFaces = [":", ";", "-", "~", ")", "D"];

  let newArray = arr.filter((elem) => {
    if (elem.length < 2 || elem.length > 3) {
      return false;
    } else if (elem[0] !== ":" && elem[0] !== ";") {
      return false;
    } else if (elem[elem.length - 1] !== ")" && elem[elem.length - 1] !== "D") {
      return false;
    } else if (elem.length === 3 && elem[1] !== "-" && elem[1] !== "~") {
      return false;
    } else {
      return true;
    }
  });

  console.log(newArray);

  return newArray.length;
}

// Second Solution
function countSmileys(arr) {
  let eyes = [":", ";"];
  let mouths = [")", "D"];
  let noses = ["-", "~"];

  return arr.filter((face) => {
    if (face.length < 2 || face.length > 3) return false;

    let hasValidEyes = eyes.includes(face[0]);
    let hasValidMouth = mouths.includes(face[face.length - 1]);
    let hasValidNose = face.length === 2 || noses.includes(face[1]);

    return hasValidEyes && hasValidMouth && hasValidNose;
  }).length;
}
