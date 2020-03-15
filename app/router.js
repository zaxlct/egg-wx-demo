'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app
  // router.get('/', controller.home.index)
  router.resources('user', '/api/v1/user', app.controller.user)
}