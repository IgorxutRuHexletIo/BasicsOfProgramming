import assert from 'assert';
import * as solution from './implementations';

assert(Number.isNaN(solution.factorial(-3)));
assert(Number.isNaN(solution.factorial('not number')));
assert(Number.isNaN(solution.factorial(0.2)));

// BEGIN (write your solution here)
assert.equal(solution.factorial(0), 1);
assert.equal(solution.factorial(1), 1);
assert.equal(solution.factorial(3), 6);
// END
