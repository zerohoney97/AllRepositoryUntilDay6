const { primitiveUserFun } = require("../models/users");

const controllUsers = {
  // 로그인
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const temp = await primitiveUserFun.signIn(email, password);
      // 회원이 있다면 true,없다면 false반환
      if (temp) {
        return true;
      } else {
        // 존재하지 않는 회원일 때,아이디,비번이 잘 못 됐을 때
        throw new Error("존재하지 않는 회원입니다!");
      }
    } catch (error) {
      // 존재하지 않는 회원일 때,아이디,비번이 잘 못 됐을 때
      if (error.message == "존재하지 않는 회원입니다!") {
        console.log("아이디 혹은 비밀번호가 잘못 됐습니다");
      } else {
        console.log("컨트롤러에서 로그인 오류 발생", error);
      }
      return false;
    }
  },
  SignUp: async (req, res) => {
    const { email, password, nickName } = req.body;
    try {
      //빈칸이 하나라도 있을 경우
      if (email == "" || password == "" || nickName == "") {
        throw new Error("none");
      } else {

        if (await primitiveUserFun.validatedUser(email)) {
          await primitiveUserFun.signUp(email, password, nickName);
          // 회원가입 성공이므로 true
          return true;
        } else {
          // 이미 존재하는 회원일시
          throw new Error("already");
        }
      }
    } catch (error) {
      if (error.message == "already") {
        console.log("이미 존재하는 회원입니다.");
        // 회원가입 실패이므로 false
      } else if (error.message == "none") {
        console.log("빈칸이 존재합니다.");
      } else {
        console.log("오류 발생 컨트롤러 signUp", error);
      }
      return false;
    }
  },
};

module.exports = { controllUsers };
