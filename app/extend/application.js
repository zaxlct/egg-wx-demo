'use strict'

const errors = require('../utils/http-exception')
const validator = require('../validate/validator')
module.exports = {
  errs: errors,
  validator,
}