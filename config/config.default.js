/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'island-egg',
      user: 'root',
      // dbName: 'island-egg',
      password: '123456',
    },
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584066474406_4742'
  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}