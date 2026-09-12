// EXTRACT THE DOMAIN FROM A URL

// Link to original problem
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Instructions
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Solution

function domainName(url) {
  let newUrl;

  if (url.startsWith("http://www.")) {
    newUrl = url.replace("http://www.", "").split(".");
  } else if (url.startsWith("http://")) {
    newUrl = url.replace("http://", "").split(".");
  } else if (url.startsWith("https://www.")) {
    newUrl = url.replace("https://www.", "").split(".");
  } else if (url.startsWith("https://")) {
    newUrl = url.replace("https://", "").split(".");
  } else if (url.startsWith("www.")) {
    newUrl = url.replace("www.", "").split(".");
  } else {
    newUrl = url.split(".");
  }
}
