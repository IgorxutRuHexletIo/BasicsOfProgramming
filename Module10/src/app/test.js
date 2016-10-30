import assert from 'assert';
import solution from './solution';

assert.equal(100, solution.square(10));
assert.equal(181, solution.sumOfSquares(10, -9));
assert.equal(0, solution.squareSumOfSquares(0, 0));
assert.equal(4, solution.squareSumOfSquares(1, 1));
assert.equal(3364, solution.squareSumOfSquares(-3, 7));
