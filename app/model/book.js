'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Book extends Sequelize.Model {}
  Book.init({
    fav_nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize: app.model,
    tableName: 'book',
  })

  return Book
}