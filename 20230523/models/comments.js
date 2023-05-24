const Sequlize = require("sequelize");

class Comment extends Sequlize.Model {
  static init(sequelize) {
    return super.init({
      writer: { type: Sequlize.STRING(20), allowNull: false },
      content: { type: Sequlize.TEXT },
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
      paranoid: false,
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      underscored: false,
    });
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post, {
      foreignKey: "post_for_id",
      targetKey: "id",
    });
  }
}

module.exports = Comment;
