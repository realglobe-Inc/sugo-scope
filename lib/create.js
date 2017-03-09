/**
 * Create a SugoScope instance
 * @function create
 * @param {...*} args
 * @returns {SugoScope}
 */
'use strict'

const SugoScope = require('./sugo_scope')

/** @lends create */
function create (...args) {
  return new SugoScope(...args)
}

module.exports = create
