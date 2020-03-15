'use strict'

const Controller = require('egg').Controller

/**
 * @controller user 用户接口
 */
class UserController extends Controller {
  // async index() {

  // }

  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /api/v1/user
   * @request body createUserRequest *body
   * @response 200 queryUserResponse 创建成功
   */
  async create() {
    const ctx = this.ctx
    const v = await new ctx.app.validator.RegisterValidator().validate(ctx)
    const user = await ctx.service.user.create({
      email: v.get('body.email'),
      password: v.get('body.password1'),
      nickname: v.get('body.nickname'),
    })
    ctx.body = {
      id: user.id,
    }
  }
}
module.exports = UserController