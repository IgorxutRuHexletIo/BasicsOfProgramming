import assert from 'assert';
import { sequenceSum } from './solution';

assert.equal(sequenceSum(1, 1, 1), 1);
assert.equal(sequenceSum(2, 1, 2), 0);
assert.equal(sequenceSum(1, 5, 1), 15);
assert.equal(sequenceSum(1, 5, 3), 5);
assert.equal(sequenceSum(2, 6, 2), 12);
