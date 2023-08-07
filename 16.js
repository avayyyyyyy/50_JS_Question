// Use `map()` to double all the elements

let arr = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  return arr.map((elem) => elem * 2);
}

console.log(doubleArray(arr));