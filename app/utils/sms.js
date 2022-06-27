'use strict'
const { createUniqueString } = require('./utils')
const axios = require('axios')
const {
  SendFail,
  VerifyCodeFail,
} = require('./http-exception')

class SMS {
  constructor() {
    this.error = {
      SendFail,
      VerifyCodeFail,
    }
    this.APPID = '14b87e8e785647289260ce9e15623124'
    this.APPKEY = 'a777f2f0e4cb4d4f82e6ae2dd106fedb'
  }

  async sendSms(phone) {
    const result = await axios.post('https://otp.yunpian.com/api/sms/sendCode', null, {
      params: {
        phone,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-app-id': this.APPID,
        'x-app-key': this.APPKEY,
        'x-timestamp': Date.now(),
        'x-nonce': createUniqueString(),
      },
    }).catch(err => {
      throw new this.error.SendFail()
    })
    if (result.data.code !== 0) {
      throw new this.error.SendFail(result.data.msg)
    }
  }

  /**
   *
   * @param {*} phone 手机号
   * @param {*} code 验证码
   * @return 不返回任何内容，如果验证码错错误，直接抛出异常
   */
  async verifyCode(phone, code) {
    const result = await axios.post('https://otp.yunpian.com/api/sms/verifyCode', null, {
      params: {
        phone,
        code,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-app-id': this.APPID,
        'x-app-key': this.APPKEY,
        'x-timestamp': Date.now(),
        'x-nonce': createUniqueString(),
      },
    }).catch(err => {
      throw new this.error.VerifyCodeFail()
    })
    if (result.data.code !== 0) {
      throw new this.error.VerifyCodeFail(result.data.msg)
    }
    return true
  }
}

module.exports = SMS