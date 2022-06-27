'use strict'

module.exports = {
  createUserRequest: {
    nickname: {
      type: 'string',
      required: true,
      description: '用户手机号，输入11位的手机号，该手机号在手机验证码登录接口用的到'
    },
    password1: {
      type: 'string',
      required: true,
      min: 6,
      max: 32,
      description: '密码1',
    },
    password2: {
      type: 'string',
      required: true,
      min: 6,
      max: 32,
      description: '密码2',
    },
    email: {
      type: 'string',
      required: true,
      example: '952766532@qq.com',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      description: '邮箱'
    },
  },
}