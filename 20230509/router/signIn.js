const e = require("express");
const signInrouter = e.Router();
const { controllUsers } = require("../controllers/users");
const dot = require("dotenv").config();

const jwt = require("jsonwebtoken");

signInrouter.get("/", async (req, res) => {
  res.render("signIn");
});
signInrouter.post("/", async (req, res) => {
  try {
    const temp = await controllUsers.Login(req, res);
    const user = temp[1];
    if (temp[0]) {
      const KEY = process.env.KEY;
      let token = jwt.sign(
        {
          type: "JWT",
          name: temp[1].id,
        },
        KEY,
        {
          expiresIn: "10s",
          issuer: "owner",
        }
      );

      let refreshToken = jwt.sign(
        {
          type: "JWT",
          name: temp[1].id,
        },
        KEY,
        {
          expiresIn: "30m",
          issuer: "owner",
        }
      );

      req.session.regenerate((err) => {
        if (err) {
          // 세션 재설정 실패 처리
          res.status(500).send("세션 재설정에 실패했습니다.");
        } else {
          req.session.token = token;
          req.session.refreshToken = refreshToken;
          res.redirect(`/board/?id=${temp[1].id}`);
        }
      });
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
