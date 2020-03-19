'use strict'

const Controller = require('egg').Controller

/**
 * @controller Like 点赞
 */
class LikeController extends Controller {
  /**
   * @summary 进行点赞
   * @description 进行点赞
   * @router post /api/v1/like
   * @request body likeRequest * body
   * @response 201
   * @apikey
   */
  async like() {
    const ctx = this.ctx
    const v = await new this.app.validator.LikeValidator().validate(ctx, {
      id: 'art_id'
    })
    const art_id = v.get('body.art_id')
    const type = v.get('body.type')
    await ctx.service.favor.createFavor(art_id, type, ctx.auth.uid)
    ctx.status = 201
  }

  /**
   * @summary 取消点赞
   * @description 取消点赞
   * @router post /api/v1/like/cancel
   * @request body likeRequest * body
   * @response 201
   * @apikey
   */
  async cancel() {
    const ctx = this.ctx
    const v = await new this.app.validator.LikeValidator().validate(ctx, {
      id: 'art_id'
    })
    const art_id = v.get('body.art_id')
    const type = v.get('body.type')
    await ctx.service.favor.deleteFavor(art_id, type, ctx.auth.uid)
    ctx.status = 201
  }
}
module.exports = LikeController