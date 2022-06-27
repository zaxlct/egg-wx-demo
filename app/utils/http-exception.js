'use strict'
const {
  HttpException,
} = require('../lin-validator/exception')

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10000
  }
}

class SendFail extends HttpException {
  constructor(msg, errorCode = 60007) {
    super()
    this.code = 400
    this.msg = msg || '发送验证码失败'
    this.errorCode = errorCode
  }
}

class VerifyCodeFail extends HttpException {
  constructor(msg, errorCode, httpStatus) {
    super()
    this.msg = msg || '验证码错误'
    this.errorCode = errorCode || 10004
    this.code = httpStatus || 401
  }
}

class EmailExists extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || '该邮箱已存在'
    this.errorCode = errorCode || 10008
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 201
    this.msg = msg || 'ok'
    this.errorCode = errorCode || 0
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '资源未找到'
    this.errorCode = errorCode || 10000
    this.code = 404
  }
}

class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '授权失败'
    this.errorCode = errorCode || 10004
    this.code = 401
  }
}

class Forbbiden extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '禁止访问'
    this.errorCode = errorCode || 10006
    this.code = 403
  }
}

class LikeError extends HttpException {
  constructor(msg, error_code) {
    super()
    this.code = 400
    this.msg = msg || '你已经点赞过'
    this.error_code = 60001
  }
}

class DislikeError extends HttpException {
  constructor(msg, error_code) {
    super()
    this.code = 400
    this.msg = '你已取消点赞'
    this.error_code = 60002
  }
}

module.exports = {
  ParameterException,
  EmailExists,
  Success,
  NotFound,
  AuthFailed,
  Forbbiden,
  LikeError,
  DislikeError,
  SendFail,
  VerifyCodeFail,
}
