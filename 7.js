//  checks if a given year is a leap year -->
let year = prompt("Enter a year! : ");
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      alert("Leap Year!");
    } else {
      alert("Not a leap year!");
    }
  } else {
    alert("Leap Year!");
  }
} else {
  alert("Not a leap year!");
}
