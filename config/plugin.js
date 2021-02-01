'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  swaggerdoc: {
    enable: true, // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 第三方插件 包名称
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  }
}