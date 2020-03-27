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
      type: 'integer'
    },
    start: {
      type: 'integer'
    },
    total: {
      type: 'integer'
    },
  },
}