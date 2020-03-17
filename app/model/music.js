'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Music extends Sequelize.Model {}
  Sentence.init({
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
    url: Sequelize.STRING,
  }, {
    sequelize: app.model,
    tableName: 'music',
  })

  return Music
}