'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
  } = app
  router.post('/api/v1/user', 'user.create')

  router.post('/api/v1/token', 'token.create')
  router.post('/api/v1/token/verify', new app.middlewares.auth().m, 'token.verify')

  router.get('/api/v1/classic/latest', new app.middlewares.auth().m, 'classic.latest')
  router.get('/api/v1/classic/:index/next', new app.middlewares.auth().m, 'classic.next')
  router.get('/api/v1/classic/:index/previous', new app.middlewares.auth().m, 'classic.previous')
  router.get('/api/v1/classic/:type/:id', new app.middlewares.auth().m, 'classic.detail')
  router.get('/api/v1/classic/favor', new app.middlewares.auth().m, 'classic.myFavor')
  router.get('/api/v1/classic/:type/:id/favor', new app.middlewares.auth().m, 'classic.favor')

  router.post('/api/v1/like', new app.middlewares.auth().m, 'like.like')
  router.post('/api/v1/like/cancel', new app.middlewares.auth().m, 'like.cancel')

  router.get('/api/v1/book/hot_list', 'book.hotList')
  router.get('/api/v1/book/:id/detail', 'book.detail')
  router.get('/api/v1/book/search', 'book.search')
  router.get('/api/v1/book/favor/count', new app.middlewares.auth().m, 'book.myFavorCount')
  router.get('/api/v1/book/:id/favor', new app.middlewares.auth().m, 'book.favorDetail')
  router.get('/api/v1/book/hot_keyword', 'book.hotKeyword')
  router.post('/api/v1/book/add/short_comment', new app.middlewares.auth().m, 'book.addComment')
  router.get('/api/v1/book/:id/short_comment', 'book.getComment')

  // router.resources('user', '/api/v1/user', new app.middlewares.auth().m, app.controller.user)
}