'use strict'
const bcrypt = require('bcryptjs')
const Service = require('egg').Service

class TokenService extends Service {
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
      throw new this.app.errs.AuthFailed('账号或密码错误')
    }
    const uid = user.id
    return this.app.middleware.auth.generateToken(uid, this.app.middleware.auth.User, this.app.config.auth.security)
  }

  async wxCodeToToken(code) {
    const user = await this.ctx.model.User.create({
      nickname,
      email,
      password
    })
    return user
  }
}

module.exports = TokenService