const mysql = require("./config");

exports.userInit = async () => {
  try {
    await mysql.query("SELECT * FROM user3");
  } catch (error) {
    await mysql.query(
      "CREATE TABLE users3(id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20),user_pw VARCHAR(128))"
    );
  }
};

exports.useSelect = async (userId) => {
  try {
    const [result] = await mysql.query("SELECT * FROM users3 WHERE user_id=?", [
      userId,
    ]);
    return result[0];
  } catch (error) {
    console.log("userSelect in models users", error);
  }
};

exports.userInsert = async (userId, userPassword) => {
  try {
    const [user] = await mysql.query("SELECT * FROM users3 WHERE user_id=?", [
      userId,
    ]);
    if (user.length != 0) {
      let err = new Error("중복 아이디임");
      console.log(err);
      throw err;
    }
    // 중복되지 않았으면 회원가입 정상적으로
    await mysql.query("INSERT INTO users3 (user_id,user_pw) VALUES(?,?)", [
      userId,
      userPassword,
    ]);
  } catch (error) {
    console.log("userInsert in models users");
  }
};
