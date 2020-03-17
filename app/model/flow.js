'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Flow extends Sequelize.Model {}
  Flow.init({
    index: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER
  }, {
    sequelize: app.model,
    tableName: 'flow',
  })

  return Flow
}