'use strict'

const Service = require('egg').Service

class ClassicService extends Service {
  // 查询第一条数据
  async getClassicLatest() {
    return await this.ctx.model.Flow.findOne({
      order: [['index', 'DESC']]
    })
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
}

module.exports = ClassicService