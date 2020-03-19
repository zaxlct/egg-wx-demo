'use strict'

const Service = require('egg').Service
const {
  Op
} = require('sequelize')

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
    return this.ctx.model.transaction(async t => {
      await this.ctx.model.Favor.create({
        art_id,
        type,
        uid
      }, {
        transaction: t,
      })
      await art.increment('fav_nums', {
        by: 1,
        transaction: t,
      })
    })
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

    return this.ctx.model.transaction(async t => {
      await favor.destroy({
        force: true, // 物理删除 or 软删除
        transaction: t,
      })
      await art.decrement('fav_nums', {
        by: 1,
        transaction: t,
      })
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
    // TODO 资源的点赞数是记录到资源的 fav_nums 字段里了，每次点赞和取消点赞，都要加减一
    // 应该也可以直接查询 favor 表的资源数量，这样字段的 fav_nums字段就无效了
  }

  async getMyFavorExceptBook(start, count, uid) {
    return this.ctx.model.Favor.findAll({
      offset: start,
      limit: count,
      where: {
        uid,
        type: {
          [Op.not]: [this.app.enums.ArtType.BOOK]
        }
      }
    })
  }

  async getMyFavorExceptBookArtList(start, count, uid) {
    const favorList = await this.getMyFavorExceptBook(start, count, uid)
    const ids = [
      [],
      [],
      []
    ]
    const artTypeList = this.app.enums.ArtType.getEnum()
    favorList.forEach(favor => {
      const index = artTypeList.findIndex(type => favor.type === type)
      ids[index].push(favor.art_id)
    })
    const promiseList = ids.map((artIds, index) => this.ctx.service.classic.getArtListByIds(artIds, artTypeList[index]))
    const artList = await Promise.all(promiseList)
    return artList.reduce((total, prev) => total.concat(prev), [])
  }
}

module.exports = FavorService