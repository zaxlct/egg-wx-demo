'use strict'

const Controller = require('egg').Controller
const {
  LinValidator,
  Rule
} = require('lin-mizar')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '需要是正整数', {
        min: 1
      }),
    ]
  }
}

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
    const test = await new PositiveIntegerValidator().validate(ctx)
    const params = await this.ctx.verify('user', 'body')
    const user = await ctx.service.user.create(params)
    ctx.body = {
      id: user.id,
    }
    ctx.status = 201
  }
}
module.exports = UserController