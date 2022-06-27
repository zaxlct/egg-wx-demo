'use strict'

const {
  LoginType,
} = require('../../utils/enum')

module.exports = {
  getTokenRequest: {
    email: {
      type: 'string',
      required: false,
      example: '952766532@qq.com',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      description: '邮箱'
    },
    type: {
      type: 'integer',
      required: true,
      example: 100,
      enum: LoginType.getEnum(),
      description: LoginType.getDoc()
    },
    secret: {
      type: 'string',
      required: false,
      min: 6,
      max: 32,
      description: '密码',
    },
    code: {
      type: 'string',
      required: false,
      min: 10,
      description: '小程序 code'
    },
  },
  getTokenBySmsRequest: {
    mobile: {
      type: 'string',
      required: true,
      length: 11,
      description: '手机号（注册时填的nickname）',
    },
    code: {
      type: 'string',
      required: true,
      length: 4,
      description: '短信验证码'
    },
  },
  sendSmsRequest: {
    mobile: {
      type: 'string',
      required: true,
      length: 11,
      description: '手机号（注册时填的nickname）',
    },
  },
}
