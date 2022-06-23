'use strict'
/**
 * HttpException 是所有其他异常的基类
 *
 * ```js
 * // 实例化一个默认的HttpException
 * const ex = new HttpException();
 *
 * // 实例化一个带参的HttpException
 * const ex = new HttpException({ msg: "想给你一个信息呢！" });
 *
 * // 也可以是其他参数
 * const ex = new HttpException({ errorCode: 10010 });
 *
 * // 也可以指定所有参数
 * const ex = new HttpException({ errorCode: 10010, msg: "想给你一个信息呢！", code: 200 });
 * ```
 */
class HttpException extends Error {
  /**
   * 构造函数
   * @param ex 可选参数，通过{}的形式传入
   */
  constructor(ex) {
    super()
    /**
     * http 状态码
     * code: number;
     */
    this.code = 500
    /**
     * 返回的信息内容
     * msg: any;
     */
    this.msg = '服务器未知错误'
    /**
     * 特定的错误码
     * errorCode: number;
     */
    this.errorCode = 9999
    if (ex && ex.code) {
      this.code = ex.code
    }
    if (ex && ex.msg) {
      this.msg = ex.msg
    }
    if (ex && ex.errorCode) {
      this.errorCode = ex.errorCode
    }
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10000
  }
}

module.exports = {
  HttpException,
  ParameterException,
}
