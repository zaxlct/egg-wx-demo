'use strict'

module.exports = {
  bookResponse: {
    result: {
      type: 'book',
    }
  },
  bookListResponse: {
    result: {
      type: 'array',
      itemType: 'book',
    }
  },
  bookDetailResponse: {
    result: {
      type: 'bookDetail',
    }
  },
  bookDetailListResponse: {
    result: {
      type: 'array',
      itemType: 'bookDetail',
    },
    count: {
      type: 'integer',
      description: '记录条数',
    },
    start: {
      type: 'integer',
      description: '开始记录数',
    },
    total: {
      type: 'integer',
      description: '总条数',
    },
  },
  myFavorCountResponse: {
    count: {
      type: 'integer'
    },
  },
}