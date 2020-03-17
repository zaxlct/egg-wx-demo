'use strict'
const bcrypt = require('bcryptjs')
const Service = require('egg').Service

const util = require('util')
const axios = require('axios')

class TokenService extends Service {
  constructor(ctx) {
    super(ctx)
    this.auth = this.app.middleware.auth
    this.errs = this.app.errs
    this.config = this.app.config
  }

  /**
   *
   * @param {string} plainPassword 未加密的密码
   * @param {string} password 加密过的密码
   */
  async verifyPassword(plainPassword, password) {
    return bcrypt.compareSync(plainPassword, password)
  }

  async passwordToToken(secret, user) {
    const correct = await this.verifyPassword(secret, user.password)
    if (!correct) {
      throw new this.errs.AuthFailed('账号或密码错误')
    }
    const uid = user.id
    return this.auth.generateToken(uid, this.auth.User, this.config.auth.security)
  }

  async wxCodeToToken(code) {
    const url = util.format(
      this.config.wx.loginUrl,
      this.config.wx.appId,
      this.config.wx.appSecret,
      code,
    )
    const result = await axios.get(url)
    if (result.status !== 200) {
      throw new this.errs.AuthFailed('openid获取失败')
    }
    const errcode = result.data.errcode
    const errmsg = result.data.errmsg
    if (errcode) {
      throw new this.errs.AuthFailed('openid 获取失败：' + errmsg)
    }
    let user = await this.ctx.service.user.getUserByOpenid(result.data.openid)
    if (!user) {
      user = await this.ctx.service.user.registerByOpenid(result.data.openid)
    }
    return this.auth.generateToken(user.id, this.auth.User, this.config.auth.security)
  }
}

module.exports = TokenService