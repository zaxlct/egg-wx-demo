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
    const user = await ctx.service.user.create(ctx.request.body)
    ctx.body = {
      id: user.id,
    }
    ctx.status = 201
  }
}
module.exports = UserController