'use strict'

module.exports = {
  classicResponse: {
    result: {
      type: 'classic',
    }
  },
  classicFavorResponse: {
    like_status: {
      type: 'boolean',
      description: '我是否点赞过',
    },
    fav_nums: {
      type: 'integer',
      description: '总共被点赞的次数',
    },
  },
}