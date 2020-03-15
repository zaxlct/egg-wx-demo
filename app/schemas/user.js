'use strict'

module.exports = {
  email: [{
    required: true,
    type: 'email',
  }],
  nickname: [{
    required: true,
    type: 'string',
    min: '3',
    max: '10',
  }],
  password1: [{
    required: true,
    type: 'string',
    range: {
      min: '3',
      max: '10',
    }
  }],
  password2: [{
    required: true,
    type: 'string',
    range: {
      min: '3',
      max: '10',
    }
  }, {
    validator: ctx => async (rule, value, callback, source, options) => {
      if (source.password1 !== source.password2) {
        throw ('两次密码不一致')
      }
    }
  }]
}