'use strict'

const {
  ArtType,
} = require('../../utils/enum')

module.exports = {
  getClassicDetailRequest: {
    type: {
      type: 'integer',
      required: true,
      example: 100,
      enum: ArtType.getEnum(),
      description: ArtType.getDoc()
    },
    id: {
      type: 'integer',
      required: true,
      description: '必填,必须是正整数',
    },
  },
}