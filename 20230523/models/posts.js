const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: { type: Sequelize.STRING(30) },
        content: { type: Sequelize.TEXT },
        writer: { type: Sequelize.STRING(20), allowNull: false },
      },
      {
        sequelize,
        timestamps: true, //생성시간, 업데이트 시간 자동으로 생성
        underscored: false, //카멜 케이스 설정 유무
        modelName: "Post", //모델 이름
        tableName: "posts", //복수형으로 테이블 이름 설정
        paranoid: false, //삭제시간 생성 유무
        charset: "utf8", //인코딩 방식은 꼭 설정해야 한다.
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "user_for_id", targetKey: "id" });
    db.Post.hasMany(db.Comment, { foreignKey: "post_for_id", sourceKey: "id" });
  }
}
module.exports=Post;
