const Sequelize = require("sequelize");

// user 클래스에 시퀄리아즈 안의 model 클래스를 상속 시켜준다.
class User extends Sequelize.Model {
  static init(sequelize) {
    // super 상속받은 부모의 함수를 실행 init 실행시켜서 반환
    // init 메서드는 첫번쨰 매개변수로 컬럼에 대한 설정값이 들어가고
    // 두번째 매개변수로 테이블의 자체 설정 값이 들어간다.
    return super.init(
      {
        // 컬럼에 대한 설정
        // name 컬럼
        // VARCHAR => STRING으로
        // allowNull:null을 혀용할지
        // unique:고유키로 사용할 것인지 중복되지 않는 값.
        // primaryKey:프라이머리키 설정
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
          primaryKey: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        // TEXT = TEXT
        message: {
          type: Sequelize.TEXT,
        },
      },
      {
        // 테이블의 자체 설정
        // 매개변수로 전달받은 _squelize먼저 작성해주고
        sequelize,
        //테이블에 row 추가 했을 때 생성시간과 업데이트 시간을 표기 해준다.
        // created_at과 updated_at 이라는 컬럼이 자동으로 추가된다.
        // 우리가 row추가했을 때 시간을 기록, 수정했을 때도 시간을 기록해준다.
        timestamps: true,
        // 표기법을 바꿔준다. 기본적으로 스네이크 표기법으로 되어있는데,
        // 이를 카멜 표기법으로 바꿔준다.
        underscored: false,
        modelName: "User", //모듈의 이름을 설정. 노드 프로젝트에서 사용
        tableName: "users4", //복수형으로 설정해주자. 추가될 테이블의 이름
        paranoid: false, //true로 설정하면 delete_at이라는 컬럼도 생성이 됩니다. 이는 값은 삭제되지않고 남아있고, deleted_at에 삭제시간이 표시됨
        charset: "utf8", //인코딩 방식, 꼭 작성하자
        collate: "utf8_general_ci", //인코딩 방식 꼭 작성하자
      }
    );
  }
  static associate(db) {
    // 1:N 예

    // 1:N 관계
    // 시퀄라이즈에서 1:N관계를 hasMany 메서드로 정의해준다.
    // sourceKey: user테이블 안에 어떤키를 foreignKey와 연결해줄지.
    // hasMany 메서드의 첫번째 매개변수 넘긴 테이블이 foreignKey에 연결이되고 이름은 user_id다.
    db.User.hasMany(db.Post, { foreignKey: "user_id", sourceKey: "id" });
  }
  
}

module.exports = User;
