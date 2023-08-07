// calculates the factorial

function factorial(num) {
  let fact = 1;

  if (num == 0 || num == 1) {
    fact = 1;
  } else {
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
  }

  console.log(fact);
}

factorial(5);
