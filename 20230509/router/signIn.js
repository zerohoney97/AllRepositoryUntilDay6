const e = require("express");
const signInrouter = e.Router();
const { controllUsers } = require("../controllers/users");

signInrouter.get("/", async (req, res) => {
  res.render("signIn");
});
signInrouter.post("/", async (req, res) => {
  try {
    const temp = await controllUsers.Login(req, res);
    const user = temp[1];
    console.log(temp);
    if (temp[0]) {
      res.redirect(`/board/?id=${temp[1].id}`);
    } else {
      //로그인 실패화면으로 돌려보내줌
      res.redirect("/signIn/signInFail");
    }
  } catch (error) {
    console.log("라우터 로그인에서 에러남", error);
  }
});

// 로그인 실패 화면
signInrouter.get("/signInFail", (req, res) => {
  //3초 후에 다시 돌리는 건 ejs script안에 있음
  res.render("signInFail");
});

module.exports = { signInrouter };
