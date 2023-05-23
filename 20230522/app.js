// 로그인 하고 게시판에 글 작성 수정,삭제

const e = require("express");
const path = require("path");
const session = require("express-session");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const signUpRouter = require("./routers/signUp");
const loginRouter = require("./routers/login");
const boardRouter = require("./routers/boarder");
// 프로젝트 시작

// express express-session mysql2 ejs dotenv
// view 경로, view engine 변경
// body객체 사용
// 서버 객체=>대기상태

const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.KEY2, //세션 키
    resave: false, //다시 저장할지 여부
    saveUninitialized: false, //초기화 할 지 여부
  })
);
app.use(e.urlencoded({ extended: false }));
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/boarder", boardRouter);
sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("시퀄 연결 성공");
  })
  .catch((e) => {
    console.log("app.js sync", e);
  });

app.listen(8080, () => {
  console.log("성공했구나 이녀석..");
});
