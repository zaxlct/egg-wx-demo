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
    // const v = await new PositiveIntegerValidator().validate(ctx)
    // const user = await ctx.service.user.create(v)
    // ctx.body = {
    //   id: user.id,
    // }
    throw new ctx.app.errs.Success()
  }
}
module.exports = UserController