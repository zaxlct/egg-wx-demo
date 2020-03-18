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
}

module.exports = FavorService