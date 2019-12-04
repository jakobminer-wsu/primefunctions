/* eslint-env mocha, chai */
/* global maxPrimeSum, chai */

describe('Test for Performance', function () {
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(10000) should take less than 20ms', function () {
      this.slow(0);
      this.timeout(20);
      chai.assert.deepEqual(maxPrimeSum(10000), [9521, 65]);
    });
    it('maxPrimeSum(100000) should take less than 200ms', function () {
      this.slow(0);
      this.timeout(200);
      chai.assert.deepEqual(maxPrimeSum(100000), [92951, 183]);
    });
  });
});
