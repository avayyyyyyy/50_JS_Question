// recursive function finds the nth Fibonacci number

function Fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

console.log(Fibonacci(5));

// ---------------------------------------------------------

// without recursive function :=>

// function Fibonacci(n) {
//   let num1 = 0;
//   let num2 = 1;

//   for (let i = 0; i < n; i++) {
//     num3 = num1 + num2;
//     num1 = num2;
//     num2 = num3;
//     console.log(num3);
//   }
// }

// Fibonacci(10)
