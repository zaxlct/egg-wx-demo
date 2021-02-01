'use strict'

module.exports = {
  baseErrorResponse: {
    msg: {
      type: 'string',
      description: '错误信息',
    },
    erorr_code: {
      type: 'integer',
      description: '错误码',
    },
    request: {
      type: 'string',
      description: 'request url'
    },
  },
}