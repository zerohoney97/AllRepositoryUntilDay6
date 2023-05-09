const e = require("express");
const signUprouter = e.Router();
const { controllUsers } = require("../controllers/users");
signUprouter.get("/", async (req, res) => {
  res.render("signUp");
});

signUprouter.post("/", async (req, res) => {
  try {
    if (await controllUsers.SignUp(req, res)) {
      res.redirect("/signIn");
    } else {
      res.redirect("/signUp/signUpFail");
    }
  } catch (error) {
    console.log("회원가입 라우터에서 버그남", error);
  }
});

// 회원가입 실패 화면
signUprouter.get("/signUpFail", (req, res) => {
  //3초 후에 다시 돌리는 건 ejs script안에 있음
  res.render("signUpFail");
});

module.exports = { signUprouter };
