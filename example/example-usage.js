'use strict'

const sugoScope = require('sugo-scope')

let scope = sugoScope({})

scope.set('foo', 'bar')

scope.get('foo') // -> "bar"
