// WHO ATE THE COOKIE

// Link to the original problem
// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

// Instructions
// If the input is a Number then "Monica" ate the cookie.

// If the input is anything else "the dog" ate the cookie.

// The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Solution
function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}
