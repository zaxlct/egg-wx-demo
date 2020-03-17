'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async create({
    nickname,
    email,
    password
  }) {
    return await this.ctx.model.User.create({
      nickname,
      email,
      password
    })
  }

  async findByEmail(email) {
    return await this.ctx.model.User.findOne({
      where: {
        email
      }
    })
  }

  async getUserByOpenid(openid) {
    return await this.ctx.model.User.findOne({
      where: {
        openid
      }
    })
  }

  async registerByOpenid(openid) {
    return await this.ctx.model.User.create({
      openid,
    })
  }
}

module.exports = UserService