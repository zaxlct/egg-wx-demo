'use strict'
const axios = require('axios')
const Service = require('egg').Service
const util = require('util')

const lodash = require('lodash')
const {
  noQueryBookList
} = require('../mock/book')

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
        id,
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
        title: '书本测试名称' + id,
        translator: ['徐宝文', '李志译', '尤晋元审校'],
        subtitle: '第 2 版·新版',
        summary: `夏洛蒂和传记作者告诉我们，爱米丽生性独立、豁达、纯真、刚毅、热情而又内向。她颇有男儿气概，酷爱自己生长其间的荒原，平素在离群索居中，除去手足情谊，最喜与大自然为友，从她的诗和一生行为，都可见她天人合一宇宙观与人生观的表现，有人因此而将她视为神秘主义者。其实人与自然的关系，从来就是人类文明史上重要的命题，爱米丽不过是步历代哲人、隐者、科学家、艺术家后尘，通过生活和创作，身体力行地探寻人与自然的关系。\n
        由于爱米丽一生经历简短， 她既未受完整系统教育， 又没有爱情婚姻实际体验， 人们对于她能写出《 呼啸山庄》 这样深刻独特的爱情绝唱也曾疑惑不解。 对这一问题， 早有人以“ 天才说” ",\n
        做出解释， 而经过百余年的研考据， 传记作者和评论家又提出了更加令人信服的凭据。 爱米丽以及她的姐妹， 虽然生长在苦寒单调的约克郡， 她们的父亲帕特里克・ 勃朗特却来自北爱尔兰， 母亲玛丽亚・ 勃兰威尔是威尔...",\n
        夏洛蒂和传记作者告诉我们， 爱米丽生性独立、 豁达、 纯真、 刚毅、 热情而又内向。 她颇有男儿气概， 酷爱自己生长其间的荒原， 平素在离群索居中， 除去手足情谊， 最喜与大自然为友， 从她的诗和一生行为， 都可见她天人合一宇宙观与人生观的表现， 有人因此而将她视为神秘主义者。 其实人与自然的关系， 从来就是人类文明史上重要的命题， 爱米丽不过是步历代哲人、 隐者、 科学家、 艺术家后尘， 通过生活和创作， 身体力行地探寻人与自然的关系。
        `
      }
    }
  }

  async searchFromYuShu(q, pageNum, pageSize) {
    const list = lodash.cloneDeep(noQueryBookList)
    if (!q) {
      //
    } else if (q === 'js' || q === 'vue') {
      list.books = list.books.map((item, index) => ({
        ...item,
        title: q + '从入门到放弃' + (index + 1)
      }))
    } else {
      return []
    }
    const start = (pageNum - 1) * pageSize
    const end = pageNum * pageSize
    if (pageNum > 4) return []
    list.books = list.books.splice(start, end)
    return list
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