import assert from 'assert';
import * as solution from './solution';

assert.equal(solution.smallestDivisor(1), 1);
assert.equal(solution.smallestDivisor(3), 3);
assert.equal(solution.smallestDivisor(4), 2);
assert.equal(solution.smallestDivisor(8), 2);
assert.equal(solution.smallestDivisor(9), 3);
assert.equal(solution.smallestDivisor(17), 17);
assert.equal(solution.smallestDivisor(15), 3);
assert.equal(solution.smallestDivisor(121), 11);
