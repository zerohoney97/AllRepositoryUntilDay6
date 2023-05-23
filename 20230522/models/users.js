const Sequlize = require("sequelize");

class User extends Sequlize.Model {
  static init(sequelize) {
    return super.init(
      {
        // 컬럼의 내용
        name: {
          type: Sequlize.STRING(20),
          allowNull: false,
        },
        age: {
          type: Sequlize.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: Sequlize.STRING(20),
        },
        user_pw: {
          type: Sequlize.STRING(64),
        },
      },
      {
        sequelize,
        timestamps: true, //생성시간, 업데이트 시간 자동으로 생성
        underscored: false, //카멜 케이스 설정 유무
        modelName: "User", //모델 이름
        tableName: "users", //복수형으로 테이블 이름 설정
        paranoid: false, //삭제시간 생성 유무
        charset: "utf8", //인코딩 방식은 꼭 설정해야 한다.
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "user_id", sourceKey: "id" });
  }
}

module.exports = User;
