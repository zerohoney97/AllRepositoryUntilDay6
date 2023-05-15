const { mysql } = require("./config");

exports.uesrInit = async () => {
  try {
    // users 테이블이 있는지 확인
    await mysql.query("SELECT * FROM users");
  } catch (error) {
    const sql =
      "CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20),user_pw VARCHAR(20),refresh VARCHAR(255))";
    await mysql.query(sql);
  }
};

exports.userList = async () => {
  try {
    const [result] = await mysql.query("SELECT * FROM users");
    return result;
  } catch (error) {
    console.log("userModel with userList", error);
  }
};

exports.userSelect = async (userId) => {
  try {
    const [[result]] = await mysql.query(
      "SELECT * FROM users WHERE user_id=?",
      [userId]
    );
    return result;
  } catch (error) {
    console.log("userSelect in userModels", error);
  }
};

exports.userInsert = async (userId, userPassword) => {
  try {
    // 이미 가입란 아이디인지 확인
    const [user] = await mysql.query("SELECT * FROM users WHERE user_id=?", [
      userId,
    ]);
    if (user.length != 0) {
      // 이미 가입한 유저다
      //   동적할당으로 err객체 생성
      let err = new Error("이미 가입된 유저입니다.");
      console.log(err);
      return err;
    } else {
      // 조건문을 통과했으면 없는 아이디 이므로 회원가입 가능
      await mysql.query("INSERT INTO users (user_id,user_pw) VALUES(?,?)", [
        userId,
        userPassword,
      ]);
    }
  } catch (error) {
    console.log("userInsert in userModels", error);
  }
};

exports.userPasswordUpdate = async (userId, userPassword) => {
  try {
    await mysql.query("UPDATE users SET user_pw=? WHERE user_id=?", [
      userPassword,
      userId,
    ]);
  } catch (error) {
    console.log("userPasswordUpdate in userModel", error);
  }
};

exports.userRefresh = async (userId, refresh) => {
  try {
    await mysql.query("UPDATE users SET refresh=? WHERE user_id=?", [
      refresh,
      userId,
    ]);
  } catch (error) {
    console.log("userRefresh in userModel", error);
  }
};

exports.userDelete = async (userId) => {
  try {
    await mysql.query(
      "DELETE FROM users WHERE user_id=?;SET @CNT=0;UPDATE users SET users.id=@CNT:=@CNT+1;ALTER TABLE users AUTO_INCREMENT=0",
      [userId]
    );
  } catch (error) {
    console.log("userDelete in userModel", error);
  }
};
