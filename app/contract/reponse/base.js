'use strict'

module.exports = {
  baseResponse: {
    result: {
      type: 'boolean',
      required: true
    },
    errorMessage: {
      msg: 'string',
      erorr_code: 'boolean',
      request: 'string',
      type: 'object',
    },
  },
}