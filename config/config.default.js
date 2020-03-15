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
      password: '123456',
      define: {
        freezeTableName: true, // 阻止数据表名变为复数
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
        // timestamps: false // 阻止model生成createAt和updateAt字段
      }
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
  config.middleware = ['errorHandler']
  config.errorHandler = {
    match: '/api',
  }

  // add your user config here
  const userConfig = {
    myAppName: '旧岛小样',
    description: '旧岛小样微信小程序 API 文档',
  }

  config.validator = {
    open: async ctx => 'zh-CN',
    // or
    // open: 'zh-CN',  它表示开启的语言
    languages: {
      'zh-CN': {
        required: '%s 必填'
      }
    },
    async formatter(ctx, error) {
      ctx.type = 'json'
      ctx.status = 400
      ctx.body = error
    }
  }

  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    // basePath: '',
    // 接口文档的标题，描述或其它
    apiInfo: {
      title: userConfig.myAppName, // 接口文档的标题
      description: userConfig.description, // 接口文档描述
      version: '1.0.0', // 接口文档版本
    },
    schemes: ['http', 'https'], // 配置支持的协议
    consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: { // 配置接口安全授权方式
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)
    enable: true, // 默认 true (启用)
    // 原文链接： https: //blog.csdn.net/Render401/article/details/102861132
  }
  return {
    ...config,
    ...userConfig,
  }
}