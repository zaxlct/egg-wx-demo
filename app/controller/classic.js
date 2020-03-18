'use strict'

const Controller = require('egg').Controller

/**
 * @controller Classic 期刊
 */
class ClassicController extends Controller {
  /**
   * @summary 获取最新一期
   * @description 获取最新一期期刊
   * @router get /api/v1/classic
   * @response 200 classicResponse 获取最新一期
   * @apikey
   */
  async latest() {
    const ctx = this.ctx
    const query = {
      order: [
        ['index', 'DESC']
      ]
    }
    const classic = await ctx.service.classic.getClassic(query, ctx.auth.uid)
    ctx.body = classic
  }
}
module.exports = ClassicController