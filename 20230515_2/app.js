// 프로젝트 시작!

const e = require("express");
const path = require("path");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
const app = e();
const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(e.urlencoded({ extended: false }));
app.use(
  session({
    // 세션을 발급할 때 사용할 키
    secret: process.env.SESSION_KEY,
    // 세션이 변경되거나 저장할 때나 불러올 때 다시 저장할지 여부
    resave: false,
    // 세션에 저장할 때 초기화 여부
    saveUninitialized: false,
  })
);
app.use("/join", joinRouter);
app.use("/login", loginRouter);

app.listen(8080, () => {
  console.log("성공했구나 이녀석");
});
