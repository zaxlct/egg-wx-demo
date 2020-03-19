'use strict'

const Service = require('egg').Service
const {
  Op
} = require('sequelize')

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

  async getArtListByIds(artIds, type) {
    const {
      MOVIE,
      SENTENCE,
      MUSIC,
      BOOK,
    } = this.ctx.app.enums.ArtType
    let artList = []
    switch (type) {
      case MOVIE:
        artList = await this.ctx.model.Movie.findAll({
          where: {
            id: {
              [Op.in]: artIds
            },
          }
        })
        break
      case SENTENCE:
        artList = await this.ctx.model.Sentence.findAll({
          where: {
            id: {
              [Op.in]: artIds
            },
          }
        })
        break
      case MUSIC:
        artList = await this.ctx.model.Music.findAll({
          where: {
            id: {
              [Op.in]: artIds
            },
          }
        })
        break
      case BOOK:
        artList = await this.ctx.model.Book.findAll({
          where: {
            id: {
              [Op.in]: artIds
            },
          }
        })
        break
      default:
        break
    }
    return artList
  }


  /**
   *
   * @param {integer} art_id 正整数，
   * @param {integer} type 正整数，
   * @param {integer} uid 正整数，
   * @param {integer} index 正整数，期刊数
   */
  async getClassicByArt(art_id, type, uid, index = null) {
    const art = await this.getArtById(art_id, type)
    const like_status = await this.ctx.service.favor.getFavorByArtId(art_id, type, uid)
    //  classsic 里的 id 是 ait_id
    return Object.assign(
      art.toJSON(), {
        like_status: !!like_status,
        index,
      },
    )
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
    const classic = await this.getClassicByArt(flow.art_id, flow.type, uid, flow.index)
    return classic
  }

  /**
   *
   * @param {integer} art_id 正整数，
   * @param {integer} type 正整数，
   * @param {integer} uid 正整数，
   */
  async getClassicFavor(art_id, type, uid) {
    const like_status = await this.ctx.service.favor.getFavorByArtId(art_id, type, uid)
    const classsic = await this.ctx.service.classic.getArtById(art_id, type)
    // 点赞数是记录的字段，也可查询 favor 表里实际的数量
    return {
      like_status: !!like_status,
      fav_nums: classsic.fav_nums,
    }
  }
}

module.exports = ClassicService