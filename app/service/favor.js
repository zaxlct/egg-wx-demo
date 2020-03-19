'use strict'

const Service = require('egg').Service

class FavorService extends Service {
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