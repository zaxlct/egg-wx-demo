'use strict'

const Service = require('egg').Service

class ClassicService extends Service {
  // 查询第一条数据
  async getFlow(query) {
    return await this.ctx.model.Flow.findOne(query)
  }

  async getArtById(art_id, type) {
    const {
      MOVIE,
      SENTENCE,
      MUSIC,
      BOOK,
    } = this.ctx.app.enums.ArtType
    let art = null
    switch (type) {
      case MOVIE:
        art = await this.ctx.model.Movie.findOne({
          where: {
            id: art_id,
          }
        })
        break
      case SENTENCE:
        art = await this.ctx.model.Sentence.findOne({
          where: {
            id: art_id,
          }
        })
        break
      case MUSIC:
        art = await this.ctx.model.Music.findOne({
          where: {
            id: art_id,
          }
        })
        break
      case BOOK:
        art = await this.ctx.model.Book.findOne({
          where: {
            id: art_id,
          }
        })
        break
      default:
        break
    }
    return art
  }

  async getClassic(query, uid) {
    const flow = await this.getFlow(query)
    if (!flow) {
      throw new this.ctx.app.errs.NotFound()
    }
    const art = await this.getArtById(flow.art_id, flow.type)
    const like_status = await this.ctx.service.favor.getFavorByArtId(flow.art_id, flow.type, uid)
    return {
      like_status: !!like_status,
      index: flow.index,
      type: flow.type,
      id: flow.art_id,
      content: art.content,
      fav_nums: art.fav_nums,
      image: art.image,
      pubdate: art.like_status,
      title: art.title,
      url: art.url,
    }
  }
}

module.exports = ClassicService