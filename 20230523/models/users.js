const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        user_id: { type: Sequelize.STRING(20), allowNull: false, unique: true },
        user_pw: { type: Sequelize.STRING(150), allowNull: false },
        isAdmin: { type: Sequelize.BOOLEAN ,defaultValue:false},
        isAccept: { type: Sequelize.BOOLEAN ,defaultValue:true},

      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
        underscored: false,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "user_for_id", sourceKey: "id" });
    db.User.belongsTo(db.Grade, {
      foreignKey: "grade_for_id",
      targetKey: "id",
    });
  }
}
module.exports = User;
