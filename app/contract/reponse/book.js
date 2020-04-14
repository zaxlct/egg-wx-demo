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
  bookFavorDetailResponse: {
    fav_nums: {
      type: 'integer',
      description: '此书总共被收藏的数量',
    },
    like_status: {
      type: 'boolean',
      description: '当前用户是否对此书点赞',
    },
    book_id: {
      type: 'integer',
      description: '书的id',
    },
  },

  bookHotkeywordResponse: {
    hot: {
      type: 'array',
      itemType: 'string',
    },
  },
  bookShortCommentResponse: {
    comment: {
      type: 'array',
      itemType: 'string',
      description: JSON.stringify([{
        content: 'i hate6!',
        nums: 1
      }]),
    },
    book_id: {
      type: 'integer',
      description: '书的id',
    },
  },
}