import assert from 'assert';
import * as solution from './solution';

assert.equal(solution.reverse('cat'), 'tac');
assert.equal(solution.reverse('tac'), 'cat');
assert.equal(solution.reverse(''), '');
assert.equal(solution.reverse('aaaa'), 'aaaa');
