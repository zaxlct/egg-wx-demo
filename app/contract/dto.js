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
  enumsType,
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
  book: {
    id: {
      type: 'integer',
    },
    title: {
      type: 'string',
      description: '书籍题目'
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
      description: '是否点赞，列表接口不返回此字段，详情接口返回'
    },
    author: {
      type: 'string',
      description: '作者'
    },
  },
  bookDetail: {
    id: {
      type: 'integer',
    },
    author: {
      type: 'array',
      itemType: 'string',
      description: '作者（可能是多个）',
      example: `[
        "（美）Brian W. Kernighan",
        "（美）Dennis M. Ritchie"
      ]`,
    },
    binding: {
      type: 'string',
      example: '平装',
    },
    category: {
      type: 'string',
      description: '类型',
    },
    image: {
      type: 'string',
      description: '主图片'
    },
    images: {
      type: 'object',
      example: `{
        "large": "https://img3.doubanio.com/lpic/s1106934.jpg"
      }`,
    },
    isbn: {
      type: 'string',
      example: '9787111128069',
    },
    pages: {
      type: 'string',
      description: '页数'
    },
    price: {
      type: 'string',
      description: '价格',
      example: '30.00元',
    },
    pubdate: {
      type: 'string',
      description: '发布日期',
      example: '2004-1',
    },
    publisher: {
      type: 'string',
      description: '出版社',
      example: '机械工业出版社',
    },
    title: {
      type: 'string',
      description: '书名',
    },
    translator: {
      type: 'array',
      itemType: 'string',
      description: '译者（可能是多个）',
      example: `[
        "徐宝文",
        "李志译",
        "尤晋元审校"
      ]`,
    },
    subtitle: {
      type: 'string',
      example: '第 2 版·新版',
    },
    summary: {
      type: 'string',
      description: '书籍简介，很长的文本，会有换行符',
    },
  },
}