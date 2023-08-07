//  function returns the reversed version string -->
let str = "hello brooooo";
function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString(str));
