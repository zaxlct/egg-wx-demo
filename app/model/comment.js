'use strict'

module.exports = app => {
  const Sequelize = app.Sequelize
  class Comment extends Sequelize.Model {}
  Comment.init({
    book_id: Sequelize.INTEGER,
    uid: Sequelize.INTEGER,
    content: Sequelize.STRING(12),
    nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize: app.model,
    tableName: 'comment',
  })

  return Comment
}