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
      timezone: '+08:00', // 保存为本地时区
      define: {
        freezeTableName: true, // 阻止数据表名变为复数
        underscored: true, // 将自动设置所有属性的字段参数为下划线命名方式
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
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
  config.auth = {
    security: {
      secretKey: 'abcdefg',
      expiresIn: 60 * 60 * 24 * 30
    }
  }
  config.wx = {
    appId: '', // 小程序 appId
    appSecret: '', // 小程序 appSecret，在微信小程序后台获取
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }

  config.yushu = {
    detailUrl: 'http://t.yushu.im/v2/book/id/%s',
    keywordUrl: 'http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
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
      apikey: {
        type: 'apiKey',
        name: 'Authorization',
        description: 'Token 的格式是：`Bearer ${token}`',
        in: 'header',
      },
    },
    enableSecurity: true, // 是否启用授权，默认 false（不启用）
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