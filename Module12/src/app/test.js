import assert from 'assert';
import solution from './solution';

assert(solution(3, 60, 60) < 3.898);
assert(solution(3, 60, 60) > 3.896);

assert(solution(10, 90, 30) < 28.868);
assert(solution(10, 90, 30) > 28.286);
