// returns a new array of even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

function newArrayPrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(newArrayPrint(arr));
