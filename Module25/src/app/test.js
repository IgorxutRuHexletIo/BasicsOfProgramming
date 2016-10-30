import assert from 'assert';
import * as solution from './solution';

assert.equal(0, solution.calc('+', 0, 0));
assert.equal(0, solution.calc('*', 0, 0));
assert.equal(1, solution.calc('*', 1, 1));
assert.equal(10, solution.calc('+', 9, 1));
assert.equal(-2, solution.calc('-', 3, 5));
assert.equal(2, solution.calc('/', 10, 5));

assert(Number.isNaN(solution.calc('&', -10, 8)));
assert(Number.isNaN(solution.calc('#', 9, 1)));
