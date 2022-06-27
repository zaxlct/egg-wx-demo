'use strict'
const {
  HttpException,
} = require('../lin-validator/exception')

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      const isHttpException = err instanceof HttpException
      const isDev = ctx.app.config.env !== 'prod'
      const status = err.code || 500
      // if (!isHttpException && isDev) {
      //   throw err
      // } else if (!isHttpException && !isDev) {
      //   // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      //   ctx.app.emit('error', err, ctx)
      // }

      if (isHttpException) {
        ctx.body = {
          msg: err.msg,
          erorr_code: err.errorCode,
          request: `${ctx.method} ${ctx.path}`,
          ...err,
        }
      } else {
        ctx.body = {
          msg: 'we made a mistake O(∩_∩)O~~',
          error_code: 999,
          request: `${ctx.method} ${ctx.path}`,
          ...err,
        }
      }
      ctx.status = status
    }
  }
}