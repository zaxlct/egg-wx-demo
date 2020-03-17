'use strict'

module.exports = {
  getTokenResponse: {
    token: {
      type: 'string',
    },
  },
  verifyTokenResponse: {
    is_valid: {
      type: 'boolean',
      description: 'token 是否有效',
    }
  },
}