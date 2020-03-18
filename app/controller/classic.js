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
    const flow = await ctx.service.classic.getClassicLatest()
    const art = await ctx.service.classic.getArtById(flow.art_id, flow.type)
    const like_status = await ctx.service.classic.getFavorByArtId(flow.art_id, flow.type, ctx.auth.uid)
    ctx.body = {
      like_status: !!like_status,
      index: flow.index,
      type: flow.type,
      id: flow.art_id,
      content: art.content,
      fav_nums: art.fav_nums,
      image: art.image,
      pubdate: art.like_status,
      title: art.title,
      url: art.url,
    }
  }
}
module.exports = ClassicController