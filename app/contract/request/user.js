'use strict'

module.exports = {
  createUserRequest: {
    nickname: {
      type: 'string',
      required: true,
      description: '用户姓名'
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