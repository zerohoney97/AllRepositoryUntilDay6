const Sequlize = require("sequelize");

class Post extends Sequlize.Model {
  static init(sequelize) {
    return super.init(
      {
        msg: {
          type: Sequlize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}

module.exports = Post;
