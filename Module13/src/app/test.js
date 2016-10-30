import assert from 'assert';
import * as solution from './solution';

assert(!solution.isBigOdd(1000));
assert(!solution.isBigOdd(999));
assert(solution.isBigOdd(1001));
assert(!solution.isBigOdd(0));
assert(!solution.isBigOdd(1));
assert(!solution.isBigOdd(1010));
assert(solution.isBigOdd(1011));
