'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async create({
    nickname,
    email,
    password
  }) {
    const user = await this.ctx.model.User.findOne({
      where: {
        nickname
      }
    })
    if (!user) {
      throw new this.ctx.app.errs.EmailExists(`该手机号${nickname}已经注册`)
    }
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

  async findByNickname(nickname) {
    return await this.ctx.model.User.findOne({
      where: {
        nickname
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