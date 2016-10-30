import assert from 'assert';
import * as solution from './solution';

assert.equal(solution.check(1, 2, 1, 3), 1);
assert.equal(solution.check(2, 1, 3, 1), 1);
assert.equal(solution.check(2, 2, 1, 2), 0);
assert.equal(solution.check(2, 2, 3, 2), 0);
assert.equal(solution.check(1, 2, 3, 2), 0);
assert.equal(solution.check(0, 0, 0, 0), 2);
assert.equal(solution.check(1, 2, 1, 2), 2);
assert.equal(solution.check(4, 2, 4, 2), 2);
assert.equal(solution.check(2, 2, 4, 4), 1);
assert.equal(solution.check(4, 4, 2, 2), 1);
