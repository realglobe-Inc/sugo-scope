/**
 * Test case for sugoScope.
 * Runs with mocha.
 */
'use strict'

const SugoScope = require('../lib/sugo_scope.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('sugo-scope', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sugo scope', () => co(function * () {
    let scope = new SugoScope()
    ok(scope)
    scope.set('foo', 'bar')
    equal(scope.get('foo'), 'bar')
  }))
})

/* global describe, before, after, it */
