A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


//*****************************************


  Solution :

function sumPrimes(num) {
  let ourSum=0; // We start with one, prime for 1

  for (let i=2; i<=num; i++) {
    let prime=true;
    for (let j=2; j<=Math.sqrt(i); j++) {
      if ((i % j) == 0) { 
        prime=false;
        break;
      }
    }
    if (prime) { 
      ourSum+=i;
    }
  }
  return ourSum;
}

sumPrimes(10);  // 17
sumPrimes(977); // 73156
