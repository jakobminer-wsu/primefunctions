function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let divisor = 3;
  while (divisor * divisor <= num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
}

function primeGen(num) {
  const primes = [];
  let i;
  for (i = 2; i < num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primeGen(10));
