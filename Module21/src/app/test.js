import assert from 'assert';
import * as solution from './solution';

assert(!solution.isPrime(-3));
assert(!solution.isPrime(0));
assert(!solution.isPrime(-1));
assert(!solution.isPrime(1));
assert(solution.isPrime(3));
assert(!solution.isPrime(4));
assert(!solution.isPrime(21));
assert(solution.isPrime(17));
assert(!solution.isPrime(-10));
