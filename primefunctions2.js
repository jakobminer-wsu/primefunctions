function isPrime(num) {
  if (num % 2 === 0) return (num === 2);
  if (num % 3 === 0) return (num === 3);
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0) return false;
    if (num % (i + 2) === 0) return false;
  }
  return true;
}

function primeGen(num) {
  const primes = [];
  const allNums = [];
  for (let i = 0; i < num; i++) {
    allNums.push(true);
  }
  for (let i = 2; i * i <= num; i++) {
    if (allNums[i]) {
      for (let j = i * i; j < num; j += i) {
        allNums[j] = false;
      }
    }
  }
  for (let i = 2; i < num; i++) {
    if (allNums[i]) {
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

function maxPrimeSum(num) {
  const allPrimes = primeGen(num);
  let primeSum;
  let length;
  let maxSum;
  let maxLength = 0;
  for (let i = 0; i < allPrimes.length; i++) {
    primeSum = allPrimes[i];
    length = 1;
    for (let j = i + 1; j < allPrimes.length; j++) {
      primeSum += allPrimes[j];
      length++;
      if (primeSum > num) break;
      if (isPrime(primeSum) && primeSum < num) {
        if (length > maxLength) {
          maxSum = primeSum;
          maxLength = length;
        }
      }
    }
  }
  return [maxSum, maxLength];
}

console.log(maxPrimeSum(100));
console.log(maxPrimeSum(1000));
