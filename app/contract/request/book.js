'use strict'

module.exports = {
  addCommentRequest: {
    content: {
      type: 'string',
      required: true,
      description: '评论内容，最多12个字'
    },
    book_id: {
      type: 'integer',
      required: true,
    },
  },
}