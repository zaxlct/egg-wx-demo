'use strict'

const Service = require('egg').Service

class FavorService extends Service {
  async createFavor(art_id, type, uid) {
    const ctx = this.ctx
    const favor = await this.getFavorByArtId(art_id, type, ctx.auth.uid)
    if (favor) {
      throw new ctx.app.errs.LikeError()
    }
    try {
      await ctx.service.classic.getArtById(art_id, type)
    } catch (error) {
      throw new ctx.app.errs.LikeError('你点赞的资源不存在')
    }
    await this.ctx.model.Favor.create({
      art_id,
      type,
      uid,
    })
  }

  async getFavorByArtId(art_id, type, uid) {
    const favor = await this.ctx.model.Favor.findOne({
      where: {
        uid,
        art_id,
        type,
      }
    })
    return favor
  }

  async getFavorNums(art_id, type) {
    return await this.ctx.model.Favor.findOne({
      where: {
        art_id,
        type,
      }
    })
  }
}

module.exports = FavorService