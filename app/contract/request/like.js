'use strict'

const {
  ArtType,
} = require('../../utils/enum')

module.exports = {
  likeRequest: {
    type: {
      type: 'integer',
      required: true,
      example: 100,
      enum: ArtType.getEnum(),
      description: ArtType.getDoc()
    },
    art_id: {
      type: 'integer',
      required: true,
      description: '点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号',
    },
  },
}