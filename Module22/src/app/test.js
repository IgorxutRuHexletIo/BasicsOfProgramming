import assert from 'assert';
import solution from './solution';

assert.equal(solution(10, 2, 4), 20);
assert.equal(solution(10, 4, 2), 20);
assert.equal(solution(1, 4, 3), 0);

assert.equal(solution(101, 7, 3), 2208);
