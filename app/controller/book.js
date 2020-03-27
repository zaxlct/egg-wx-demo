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

  /**
   * @summary 获取书籍详情
   * @description 获取书籍详情
   * @router get /api/v1/book/<id>/detail
   * @request path integer * id 书籍 ID
   * @response 200 bookDetailResponse
   * @apikey
   */
  async detail() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx)
    const book = await ctx.service.book.getDatail(v.get('path.id'))
    ctx.body = book
  }
}
module.exports = BookController