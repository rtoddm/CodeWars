// RESPONSIBLE DRINKING

// Link to Original Problem
//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

// Instructions
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

// Solutions

// Solution #1
function hydrate(s) {
  let glassesOfWater = 0;

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      glassesOfWater += Number(char);
    }
  }

  if (glassesOfWater > 1) {
    return `${glassesOfWater} glasses of water`;
  } else {
    return `${glassesOfWater} glass of water`;
  }
}

// Solution #2
function hydrate(s) {
  let total = 0;

  s.split("").map((elem) => {
    if (elem >= 0 && elem <= 9) {
      total += Number(elem);
    }
  });

  return total === 1 ? `${total} glass of water` : `${total} glasses of water`;
}
