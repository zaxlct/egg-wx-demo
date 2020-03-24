'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class HotBook extends Sequelize.Model {}
  HotBook.init({
    index: Sequelize.INTEGER,
    image: Sequelize.STRING,
    author: Sequelize.STRING,
    title: Sequelize.STRING,
  }, {
    sequelize: app.model,
    tableName: 'hot_book',
  })

  return HotBook
}