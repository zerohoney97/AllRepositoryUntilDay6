const e = require("express");
const { mysql } = require("./connetToMysql");
// 현재 로그인한 유저
const primitiveUserFun = {
  // 테이블 초기화
  init: async (req, res) => {
    try {
      const temp = await mysql.query("SELECT * FROM users");
    } catch (error) {
      await mysql.query(
        "CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(20),password VARCHAR(20),nickname VARCHAR(15))"
      );
    }
  },

  // 로그인 로직
  signIn: async (email, password) => {
    try {
      console.log(email, password, "이메일,패스워드");
      const [[user]] = await mysql.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password]
      );
      if (user == undefined) {
        return [false, {}];
      } else {
        // 현재 로그인한 유저 저장
        const [tempUser] = await mysql.query("SELECT * FROM nowLogin");
        console.log(tempUser);
        if (tempUser.length<=0) {
          // 비었다면 삽입
          console.log('삽입')
          await mysql.query("INSERT INTO nowLogin (userId) VALUES(?)", [user.id]);
        } else {
          console.log('전환')
          // 이미 있다면 전환
          await mysql.query("UPDATE nowLogin SET userId=? WHERE id=1 ", [user.id]);
        }
        return [true, user];
      }
    } catch (error) {
      console.log("모델에서 로그인 오류 발생", error);
    }
  },
  //   회원가입시 중복된 이메일을 확인하는 로직
  validatedUser: async (email) => {
    try {
      const [[user]] = await mysql.query("SELECT * FROM users WHERE email=?", [
        email,
      ]);
      if (user == undefined) {
        // 중복회원 없을시
        throw new Error("accept");
      }
      // 회원이 중복됐을시
      return false;
    } catch (error) {
      if (error.message == "accept") {
        console.log("회원 없음");
        // 회원가입 가능할시
        return true;
      } else {
        console.log("모델,user의 signin", error);
      }
    }
  },
  //회원가입 로직
  signUp: async (email, password, nickName) => {
    try {
      await mysql.query(
        "INSERT INTO users (email,password,nickname) VALUES(?,?,?)",
        [email, password, nickName]
      );
    } catch (error) {
      console.log("회원가입 오류 모델의 users", error);
    }
  },
  getNowLogin: async () => {
    const [[{ userId }]] = await mysql.query("SELECT * FROM nowLogin");
    return userId;
  },
  // 특정 유저 가져오기
  getUser: async (id) => {
    
    const [[user]] = await mysql.query("SELECT * FROM users WHERE id=?",[id]);
    return user;
  },
};

module.exports = { primitiveUserFun };
