'use strict'
const uuid = require('uuid')

/**
 * @description 随机生成字符串
 * @return {string}
 */
function createUniqueString() {
  return uuid.v4().replace(/\-/g, '')
}

module.exports = {
  createUniqueString
}