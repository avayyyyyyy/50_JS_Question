// Remove all occurrences of a specific element

function removeElementFromArray(arr, userInp) {
  arr.forEach((elem) => {
    if (elem !== userInp) {
      newArr.push(elem);
    } else {
      return;
    }
  });
  return newArr;
}

arr = [1, 2, 3, 5, 6, 4, 55, 2, 1, 2];
newArr = [];
userTarget = 2;

console.log(removeElementFromArray(arr, userTarget));
