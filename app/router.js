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
  // router.resources('user', '/api/v1/user', new app.middlewares.auth().m, app.controller.user)
}