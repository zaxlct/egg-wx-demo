'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Movie extends Sequelize.Model {}
  Movie.init({
    image: {
      type: Sequelize.STRING,
    },
    content: Sequelize.STRING,
    pubdate: Sequelize.DATEONLY,
    fav_nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    title: Sequelize.STRING,
    type: Sequelize.TINYINT,
  }, {
    sequelize: app.model,
    tableName: 'movie',
  })

  return Movie
}