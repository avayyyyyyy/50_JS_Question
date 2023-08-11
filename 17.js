// Find the largest element using reduce()

function findLargestElement(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max));
}

arr = [15, 15, 13, 1681, 215, 341, 654, 165, 165, 1, 165];

let redue = findLargestElement(arr);

console.log(redue);
