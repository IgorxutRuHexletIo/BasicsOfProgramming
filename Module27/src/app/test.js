import assert from 'assert';
import solution from './solution';

assert.equal(solution('hello, world!'), 'Hello, World!');
assert.equal(solution('  hello,   world!'), '  Hello,   World!');
assert.equal(solution(' many different words inside sentence'),
             ' Many Different Words Inside Sentence');
