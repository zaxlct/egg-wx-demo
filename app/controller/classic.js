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
    const classic = await ctx.service.classic.getClassicByFlowQuery(query, ctx.auth.uid)
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
    const classic = await ctx.service.classic.getClassicByFlowQuery(query, ctx.auth.uid)
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
    const classic = await ctx.service.classic.getClassicByFlowQuery(query, ctx.auth.uid)
    ctx.body = classic
  }

  /**
   * @summary 获取某一期详细信息
   * @description 获取某一期详细信息
   * @router get /api/v1/classic/<type>/<id>
   * @request path1 integer * type 类型号， 最下面 enumsType 里的 ArtType
   * @request path2 integer * id 必须是正整数（id 实际是是 art_id）
   * @response 200 classicResponse
   * @apikey
   */
  async detail() {
    const ctx = this.ctx
    const v = await new this.app.validator.ClassicValidator().validate(ctx)
    const art_id = v.get('path.id')
    const type = v.get('path.type')
    const classic = await ctx.service.classic.getClassicByArt(art_id, type, ctx.auth.uid)
    ctx.body = classic
  }

  /**
   * @summary 获取点赞信息
   * @description 我是否点过赞，以及总共的点赞数
   * @router get /api/v1/classic/<type>/<id>/favor
   * @request path1 integer * type 类型号，最下面 enumsType 里的 ArtType
   * @request path2 integer * id 点赞对象的id号（ id 实际是是 art_id）
   * @response 200 classicResponse
   * @apikey
   */
  async favor() {
    const ctx = this.ctx
    const v = await new this.app.validator.LikeValidator().validate(ctx)
    const art_id = v.get('path.id')
    const type = v.get('path.type')
    const classic = await ctx.service.classic.getClassicFavor(art_id, type, ctx.auth.uid)
    ctx.body = classic
  }
}
module.exports = ClassicController