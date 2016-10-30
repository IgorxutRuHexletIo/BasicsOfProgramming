import assert from 'assert';
import * as solution from './solution';

assert(solution.greaterThan('AD', 'ad sd'));
assert(!solution.greaterThan('AD', 'Ad sd'));
assert(!solution.greaterThan('az', 'ad'));
assert(!solution.greaterThan('ASDF', 'QWER'));

assert(solution.lessThan('ghe df', 'dfwe r D'));
assert(!solution.lessThan('az', 'ad'));
assert(!solution.lessThan('ASDF', 'QWER'));
