'use strict'

const Controller = require('egg').Controller

/**
 * @controller Token
 */
class TokenController extends Controller {
  /**
   * @summary 登录接口、 获取 Token
   * @description 获取 Token
   * @router post /api/v1/token
   * @request body getTokenRequest * body
   * @response 200 getTokenResponse 创建成功
   */
  async create() {
    const ctx = this.ctx
    const app = this.app
    const v = await new ctx.app.validator.TokenValidator().validate(ctx)
    const loginType = v.get('body.type')
    const {
      USER_EMAIL,
      USER_MINI_PROGRAM,
    } = app.enums.LoginType

    let token = ''
    /* eslint-disable */
    switch (loginType) {
      case USER_EMAIL:
        const email = v.get('body.email')
        const secret = v.get('body.secret')
        const user = await ctx.service.user.findByEmail(email)
        if (!user) {
          throw new app.errs.ParameterException('账号或密码错误')
        }
        token = await ctx.service.token.passwordToToken(secret, user)
        break
      case USER_MINI_PROGRAM:
        const code = v.get('body.code')
        token = await ctx.service.token.wxCodeToToken(code)
        break

      default:
        throw new app.errs.ParameterException('没有相应的处理函数')
    }
    ctx.body = {
      token
    }
  }

  /**
   * @summary 验证 token 是否可用
   * @description
   * @router post /api/v1/token/verify
   * @response 200 verifyTokenResponse 创建成功
   * @apikey
   */
  async verify() {
    const ctx = this.ctx
    const app = this.app
    const token = ctx.auth.token
    const is_valid = app.middleware.auth.verifyToken(token, app.config.auth.security.secretKey)
    ctx.body = {
      is_valid
    }
  }
}
module.exports = TokenController