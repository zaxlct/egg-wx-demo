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
    // const url = util.format(this.app.config.yushu.detailUrl, id)
    // const detail = await axios.get(url)
    return {
      result: {
        id: 0,
        author: ['（美）Brian W. Kernighan', '（美）Dennis M. Ritchie'],
        binding: '平装',
        category: '心理学',
        image: 'https://img3.doubanio.com/lpic/s1106934.jpg',
        images: { large: 'https://img3.doubanio.com/lpic/s1106934.jpg' },
        isbn: '9787111128069',
        pages: 200,
        price: '30.00元',
        pubdate: '2004-1',
        publisher: '机械工业出版社',
        title: 'string',
        translator: ['徐宝文', '李志译', '尤晋元审校'],
        subtitle: '第 2 版·新版',
        summary: 'string'
      }
    }
  }

  async searchFromYuShu(q, start, count, summary = 1) {
    const url = util.format(this.app.config.yushu.keywordUrl, encodeURI(q), count, start, summary)
    const result = await axios.get(url)
    return result.data
  }

  async myFavorCount(uid) {
    const count = await this.ctx.model.Favor.count({
      where: {
        type: this.app.enums.ArtType.BOOK,
        uid,
      },
    })
    return count
  }

  async favorDetail(bookId, uid) {
    // 是否需要判断书籍id是否存在呢？
    const count = await this.ctx.model.Favor.count({
      where: {
        type: this.app.enums.ArtType.BOOK,
        art_id: bookId,
      },
    })
    const like_status = await this.ctx.model.Favor.findOne({
      where: {
        type: this.app.enums.ArtType.BOOK,
        uid,
        art_id: bookId,
      }
    })
    return {
      count,
      like_status: !!like_status,
      book_id: bookId,
    }
  }

  async addComment(book_id, content) {
    const comment = await this.ctx.model.Comment.findOne({
      where: {
        book_id,
        content,
      }
    })
    if (comment) {
      await comment.increment('nums')
    } else {
      await this.ctx.model.Comment.create({
        book_id,
        content,
        nums: 1,
      })
    }
  }

  async getComment(book_id) {
    const comment = await this.ctx.model.Comment.findAll({
      where: {
        book_id,
      }
    })
    return {
      comment,
      book_id,
    }
  }
}

module.exports = FavorService