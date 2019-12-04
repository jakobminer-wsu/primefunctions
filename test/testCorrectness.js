/* eslint-env mocha, chai */
/* global primeGen, cumulativeSum, maxPrimeSum, chai */

describe('Test for Correctness', function () {
  describe('primeGen', function () {
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.assert.deepEqual(primeGen(10), [2, 3, 5, 7]);
    });
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.assert.deepEqual(primeGen(20), [2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]', function () {
      chai.assert.deepEqual(cumulativeSum([1, 2, 3, 4]), [1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
      chai.assert.deepEqual(cumulativeSum([10, 11, 12, 13, 14]), [10, 21, 33, 46, 60]);
    });
  });
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(100) = [41, 6]', function () {
      chai.assert.deepEqual(maxPrimeSum(100), [41, 6]);
    });
    it('maxPrimeSum(1000) = [953, 21]', function () {
      chai.assert.deepEqual(maxPrimeSum(1000), [953, 21]);
    });
  });
});
