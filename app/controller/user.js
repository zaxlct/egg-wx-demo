'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  // async index() {

  // }

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