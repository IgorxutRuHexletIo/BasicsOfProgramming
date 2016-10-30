const assert = require('assert');
const exec = require('child_process').exec;

exec('node solution.js', (error, stdout, stderr) => {
  assert.equal(stdout.toString().trim(), '-14', stderr);
});
