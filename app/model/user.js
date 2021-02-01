'use strict'
const bcrypt = require('bcryptjs')

module.exports = app => {
  const Sequelize = app.Sequelize
  class User extends Sequelize.Model {}
  User.init({
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10)
        const psw = bcrypt.hashSync(val, salt)
        this.setDataValue('password', psw)
      },
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true,
    },
  }, {
    sequelize: app.model,
    tableName: 'user',
  })

  return User
}