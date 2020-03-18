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

  async getClassic(query, uid) {
    const flow = await this.getFlow(query)
    const art = await this.getArtById(flow.art_id, flow.type)
    const like_status = await this.getFavorByArtId(flow.art_id, flow.type, uid)
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