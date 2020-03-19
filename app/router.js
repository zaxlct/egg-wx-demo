'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
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
  // router.resources('user', '/api/v1/user', new app.middlewares.auth().m, app.controller.user)
}