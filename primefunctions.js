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

function cumulativeSum(nums) {
  const sums = [];
  let tempSum;
  let i;
  let j;
  for (i = 0; i < nums.length; i++) {
    tempSum = 0;
    for (j = 0; j <= i; j++) {
      tempSum += nums[j];
    }
    sums.push(tempSum);
  }
  return sums;
}

console.log(cumulativeSum([1, 2, 3, 4]));
