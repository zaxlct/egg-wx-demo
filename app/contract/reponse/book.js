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
}