import assert from 'assert';
import * as solution from './solution';

assert.equal(solution.addDigits(0), 0);
assert.equal(solution.addDigits(5), 5);
assert.equal(solution.addDigits(10), 1);
assert.equal(solution.addDigits(19), 1);
assert.equal(solution.addDigits(38), 2);
assert.equal(solution.addDigits(1259), 8);
assert.equal(solution.addDigits(999999999999), 9);
