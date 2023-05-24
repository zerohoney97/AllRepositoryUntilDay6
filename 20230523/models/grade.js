const Sequelize = require("sequelize");

class Grade extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: { type: Sequelize.STRING(10), allowNull: false },
      privileges: { type: Sequelize.TEXT },
    },
    {
      sequelize,
      modelName: "Grade",
      tableName: "grades",
      paranoid: false,
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      underscored: false,
    });
  }
}

module.exports=Grade;