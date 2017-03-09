/**
 * Scope object for sugos
 * @module sugo-scope
 */

'use strict'

const create = require('./create')
const SugoScope = require('./sugo_scope')

let lib = create.bind(this)

Object.assign(lib, SugoScope, {
  create,
  SugoScope
})

module.exports = lib
