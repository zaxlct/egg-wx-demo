'use strict'
const jwt = require('jsonwebtoken')

class Auth {
  /**
   *
   * @param {Number} level 访问当前接口需要的权限等级；给用户创建 token 时，会在 scope 里设置当前用户的权限。如果当时设置的是 8 ，这个接口需要的权限是 16，那么此用户无权限访问此接口
   */

  constructor(level, whiteList) {
    this.level = level || 1
    Auth.USER = 8
    Auth.ADMIN = 16
    Auth.SUPER_ADMIN = 32
  }

  get m() {
    return async (ctx, next) => {
      const errs = ctx.app.errs
      try {
        if (!ctx.header.authorization) {
          throw new errs.Forbbiden('Token 不合法')
        }
        const parts = ctx.header.authorization.split(' ')
        // Bearer 字段
        const scheme = parts[0]
        // token 字段
        const token = parts[1]
        const security = ctx.app.config.auth.security
        if (/^Bearer$/i.test(scheme)) {
          // 验证失败自动抛出异常 TokenExpiredError
          const decode = jwt.verify(token, security.secretKey)
          if (decode.scope < this.level) {
            throw new errs.Forbbiden('权限不足')
          }
          ctx.auth = {
            uid: decode.uid,
            scope: decode.scope
          }
          // next 里抛出的 error 还需要再抛出一次
          await next()
        } else {
          throw new errs.Forbbiden('Token 不合法')
        }
      } catch (error) {
        if (error.name == 'TokenExpiredError') {
          throw new errs.Forbbiden('token已过期')
        } else if (error.name == 'JsonWebTokenError') {
          throw new errs.Forbbiden('Token 不合法')
        }
        // next 里的 error
        throw error
      }
    }
  }

  static verifyToken(token, secretKey) {
    try {
      jwt.verify(token, secretKey)
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = Auth