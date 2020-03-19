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
    if (!art) {
      throw new this.ctx.app.errs.NotFound()
    }
    return art
  }

  /**
   *
   * @param {integer} art_id 正整数，
   * @param {integer} type 正整数，
   * @param {integer} uid 正整数，
   * @param {integer} index 正整数，期刊数
   */
  async getClassicByArtQuery(art_id, type, uid, index = null) {
    const art = await this.getArtById(art_id, type)
    const like_status = await this.ctx.service.favor.getFavorByArtId(art_id, type, uid)
    return {
      like_status: !!like_status,
      index,
      type,
      id: art_id,
      content: art.content,
      fav_nums: art.fav_nums,
      image: art.image,
      pubdate: art.like_status,
      title: art.title,
      url: art.url,
    }
  }

  /**
   *
   * @param {object} query 查询 Flow model 的 query
   * @param {integer} uid 用户 id
   */
  async getClassicByFlowQuery(query, uid) {
    const flow = await this.getFlow(query)
    if (!flow) {
      throw new this.ctx.app.errs.NotFound()
    }
    const classic = await this.getClassicByArtQuery(flow.art_id, flow.type, uid, flow.index)
    return classic
  }
}

module.exports = ClassicService