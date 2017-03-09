/**
 * Scope variable holder
 * @class SugoScope
 * @param {Object} [values={}] - Initial values
 */
'use strict'

/** @lends SugoScope */
class SugoScope {
  constructor (values = {}) {
    const s = this
    s.set(values)
  }

  /**
   * Set values
   * @param {Object} values
   * @returns {SugoScope} Returns this
   */
  set (values) {
    const s = this
    if (arguments.length === 2) {
      let [ key, value ] = [ ...arguments ]
      return s.set({ [key]: value })
    }
    for (let name of Object.keys(values)) {
      s[ name ] = values[ name ]
    }
    return s
  }

  /**
   * Get value
   * @param {string} name - Name of prop
   * @returns {*}
   */
  get (name) {
    const s = this
    if (arguments.length === 0) {
      return Object.assign({}, s)
    }
    return s[ name ]
  }

}

module.exports = SugoScope

