'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async create({
    nickname,
    email,
    password
  }) {
    const user = await this.ctx.model.User.create({
      nickname,
      email,
      password
    })
    return user
  }
}

module.exports = UserService