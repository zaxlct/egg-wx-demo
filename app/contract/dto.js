'use strict'

const enums = require('../utils/enum')
const enumsType = {}
Object.keys(enums).forEach(key => {
  enumsType[key] = {
    type: 'string',
    description: enums[key].getDoc(),
    enum: enums[key].getEnum(),
  }
})
module.exports = {
  classic: {
    id: {
      type: 'integer',
      description: '期刊在数据中序号，供点赞使用（实际上是 art_id，不是期刊在数据库中的主键）'
    },
    content: {
      type: 'string',
      description: '期刊内容'
    },
    fav_nums: {
      type: 'integer',
      description: '点赞次数'
    },
    image: {
      type: 'string',
      description: '图片 URL'
    },
    index: {
      type: 'integer',
      description: '期号'
    },
    like_status: {
      type: 'boolean',
      description: '是否点赞'
    },
    pubdate: {
      type: 'string',
      description: '发布日期'
    },
    title: {
      type: 'string',
      description: '期刊题目'
    },
    type: {
      type: 'integer',
      description: '期刊类型,这里的类型分为:100 电影 200 音乐 300 句子',
    }
  },
  enumsType,
}