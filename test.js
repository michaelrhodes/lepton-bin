var test = require('tape')
var check = require('bin-check')

test('it works', function (assert) {
  assert.plan(1)

  check(require('./index'))
    .then(function (nonzero) {
      assert.ok(nonzero, 'returned non-zero exit code')
    })
    .catch(function (err) {
      assert.fail(err.message)
    })
})
