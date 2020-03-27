'use strict'
const axios = require('axios')
const Service = require('egg').Service
const util = require('util')

const {
  Op,
  Sequelize
} = require('sequelize')

class FavorService extends Service {
  async getHotList() {
    const bookList = await this.ctx.model.HotBook.findAll({
      order: [
        ['index', 'DESC']
      ]
    })
    const ids = bookList.map(book => book.id)
    const favors = await this.ctx.model.Favor.findAll({
      group: ['art_id'],
      // 统计 art_id 的数量，并把数量赋值给 fav_nums 字段，fav_nums 可以随表命名
      attributes: ['art_id', [Sequelize.fn('COUNT', Sequelize.col('art_id')), 'fav_nums']],
      where: {
        // art_id: {
        //   [Op.in]: ids
        // },
        // Op.in 的简写语法
        art_id: ids,
        type: this.app.enums.ArtType.BOOK,
      },
      raw: true, // 获取原始的 JSON 数据
    })
    // [
    //   {
    //     art_id: 7,
    //     fav_nums: 3
    //   },
    //   ...
    // ]
    return bookList.map(book => {
      const currentBook = favors.find(favor => favor.art_id === book.id)
      // 如果不设置 raw: true，需要这么取数据 currentBook.dataValues.fav_nums
      book.setDataValue('fav_nums', currentBook ? currentBook.fav_nums : 0)
      return book
      // return Object.assign(book.toJSON(), {
      //   fav_nums: currentBook ? currentBook.fav_nums : 0,
      // })
    })
  }

  async getDatail(id) {
    const url = util.format(this.app.config.yushu.detailUrl, id)
    const detail = await axios.get(url)
    return detail.data
  }

  async searchFromYuShu(q, start, count, summary = 1) {
    const url = util.format(this.app.config.yushu.keywordUrl, encodeURI(q), count, start, summary)
    const result = await axios.get(url)
    return result.data
  }
}

module.exports = FavorService