# Island-Egg
用 Egg 实现的「旧岛小样」微信小程序端 API

## 功能说明
- validate
- 全局异常处理
- JWT
- Swagger-doc

## API 文档
http://127.0.0.1:7001/swagger-ui.html

## 分支说明
- 基础的开发环境搭建完成
- JWT 以及 Auth 中间件功能

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
1. 导入 sql 文件 `sql/island.sql`
2. 配置数据库 `config.default.js`

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org