// Find the largest element using reduce()

let arr = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  return arr.reduce((a, b) => a - b);
}

console.log(doubleArray(arr));