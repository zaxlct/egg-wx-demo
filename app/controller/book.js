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
   * @apikey
   */
  async hotList() {
    const ctx = this.ctx
    const hotList = await ctx.service.book.getHotList()
    ctx.body = hotList
  }
}
module.exports = BookController