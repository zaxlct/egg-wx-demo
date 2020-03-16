'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app
  router.post('/api/v1/user', new app.middlewares.auth().m, 'user.create')
  // router.resources('user', '/api/v1/user', new app.middlewares.auth().m, app.controller.user)
}