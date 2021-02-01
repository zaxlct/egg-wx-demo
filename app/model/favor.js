'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Favor extends Sequelize.Model {}
  Favor.init({
    uid: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
  }, {
    sequelize: app.model,
    tableName: 'favor',
  })

  return Favor
}