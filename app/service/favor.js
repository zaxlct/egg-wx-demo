'use strict'

const Service = require('egg').Service

class FavorService extends Service {
  async createFavor(art_id, type, uid) {
    const ctx = this.ctx
    const favor = await this.getFavorByArtId(art_id, type, uid)
    if (favor) {
      throw new ctx.app.errs.LikeError()
    }
    let art = null
    try {
      art = await ctx.service.classic.getArtById(art_id, type)
    } catch (error) {
      throw new ctx.app.errs.LikeError('你点赞的资源不存在')
    }
    await this.ctx.model.Favor.create({
      art_id,
      type,
      uid,
    })
    await art.increment('fav_nums')
  }

  async deleteFavor(art_id, type, uid) {
    const ctx = this.ctx
    const favor = await this.getFavorByArtId(art_id, type, uid)
    if (!favor) {
      throw new ctx.app.errs.DislikeError()
    }
    let art = null
    try {
      art = await ctx.service.classic.getArtById(art_id, type)
    } catch (error) {
      throw new ctx.app.errs.LikeError('你取消点赞资源不存在')
    }
    await favor.destroy({
      force: true, // 物理删除 or 软删除
    })
    await art.decrement('fav_nums')
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
    // TODO 资源的点赞数是记录到资源的 fav_nums 字段里了，每次点赞和取消点赞，都要加减一
    // 应该也可以直接查询 favor 表的资源数量，这样字段的 fav_nums字段就无效了
  }
}

module.exports = FavorService