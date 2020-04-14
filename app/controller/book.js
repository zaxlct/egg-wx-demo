'use strict'

const Controller = require('egg').Controller

/**
 * @controller Book 书籍
 */
class BookController extends Controller {
  /**
   * @summary 获取热门书籍(概要)
   * @description 获取热门书籍(概要)
   * @router get /api/v1/book/hot_list
   * @response 200 bookListResponse
   */
  async hotList() {
    const ctx = this.ctx
    const hotList = await ctx.service.book.getHotList()
    ctx.body = hotList
  }

  /**
   * @summary 获取书籍详情
   * @description 获取书籍详情
   * @router get /api/v1/book/<id>/detail
   * @request path integer * id 书籍 ID
   * @response 200 bookDetailResponse
   */
  async detail() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx)
    const book = await ctx.service.book.getDatail(v.get('path.id'))
    ctx.body = book
  }

  /**
   * @summary 获取喜欢书籍数量
   * @description 获取喜欢书籍数量
   * @router get /apiv1/book/favor/count
   * @response 200 myFavorCountResponse
   * @apikey
   */
  async myFavorCount() {
    const ctx = this.ctx
    const count = await ctx.service.book.myFavorCount(ctx.auth.uid)
    ctx.body = {
      count
    }
  }

  /**
   * @summary 书籍搜索
   * @description 当参数 summary 为 1 时，item 里的字段会少很多，需要注意
   * @router get /api/v1/book/search
   * @request path1 integer  start 开始记录数， 默认为0
   * @request path2 integer  count 记录条数， 默认为20, 超过依然按照20条计算
   * @request path3 integer  summary 返回完整或简介, 默认为0；0 为完整内容, 1 为简介
   * @request path4 string * q 搜索内容, 比如你想搜索python相关书籍, 则输入python
   * @response 200 bookDetailListResponse
   */
  async search() {
    const ctx = this.ctx
    const v = await new this.app.validator.SearchValidator().validate(ctx)
    const q = v.get('path.q')
    const start = v.get('path.start')
    const count = v.get('path.count')
    const summary = v.get('path.summary')
    const bookList = await ctx.service.book.searchFromYuShu(q, start, count, summary)
    ctx.body = bookList
  }

  /**
   * @summary 获取书籍点赞情况
   * @description 当参数 summary 为 1 时，item 里的字段会少很多，需要注意
   * @router get /api/v1/book/<id>/favor
   * @request path1 integer *id 书籍的id
   * @response 200 bookFavorDetailResponse
   * @apikey
   */
  async favorDetail() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx)
    const bookId = v.get('path.id')
    const data = await ctx.service.book.favorDetail(bookId, ctx.auth.uid)
    ctx.body = data
  }

  /**
   * @summary 获取热搜关键字
   * @router get /api/v1/book/hot_keyword
   * @response 200 bookHotkeywordResponse
   */
  async hotKeyword() {
    ctx.body = {
      hot: ['Python',
        '哈利·波特',
        '村上春树',
        '东野圭吾',
        '白夜行',
        '韩寒',
        '金庸',
        '王小波'
      ]
    }
  }

  /**
   * @summary 新增短评
   * @description 新增短评
   * @router post /api/v1/book/add/short_comment
   * @request body addCommentRequest * body
   * @response 201
   * @apikey
   */
  async addComment() {
    const ctx = this.ctx
    const v = await new this.app.validator.AddShortCommentValidator().validate(ctx, {
      id: 'book_id'
    })
    const book_id = v.get('body.book_id')
    const content = v.get('body.content')
    await ctx.service.book.addComment(book_id, content, ctx.auth.uid)
    ctx.status = 201
  }

  /**
   * @summary 获取书籍短评
   * @description 获取书籍短评
   * @router get /api/v1/book/<id>/short_comment
   * @request path1 integer *id 书籍的id
   * @response 200 bookShortCommentResponse
   * @apikey
   */
  async getComment() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx)
    const bookId = v.get('path.id')
    const data = await ctx.service.book.getComment(bookId)
    ctx.body = data
  }
}

module.exports = BookController