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
   * @response 200 classicResponse
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

  /**
   * @summary 获取当前一期的下一期
   * @description 获取当前一期的下一期
   * @router get /api/v1/classic/<index>/next
   * @request path integer * index 当前一期的期号, 必须是正整数
   * @response 200 classicResponse
   * @apikey
   */
  async next() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx, {
      id: 'index'
    })
    const query = {
      where: {
        index: v.get('path.index') + 1
      }
    }
    const classic = await ctx.service.classic.getClassic(query, ctx.auth.uid)
    ctx.body = classic
  }

  /**
   * @summary 获取当前一期的下一期
   * @description 获取当前一期的下一期
   * @router get /api/v1/classic/<index>/previous
   * @request path integer * index 当前一期的期号, 必须是正整数
   * @response 200 classicResponse
   * @apikey
   */
  async previous() {
    const ctx = this.ctx
    const v = await new this.app.validator.PositiveIntegerValidator().validate(ctx, {
      id: 'index'
    })
    const query = {
      where: {
        index: v.get('path.index') - 1
      }
    }
    const classic = await ctx.service.classic.getClassic(query, ctx.auth.uid)
    ctx.body = classic
  }
}
module.exports = ClassicController