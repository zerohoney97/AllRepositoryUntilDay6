const e = require("express");
const path = require("path");
const session = require("express-session");
const pageRouter = require("./routers/page");
const tokenRouter = require("./routers/token");
const verifyRouter = require("./routers/verify");
const app = e();

// 세션을 사용하기 위해 설치할 모듈
// npm i express-session

// ----------------------------------

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(e.urlencoded({ extended: false }));

app.use(
  session({
    // 세션을 발급할 때 사용할 키
    secret: process.env.KEY2,
    // 세션이 변경되거나 저장할 때나 불러올 때 다시 저장할지 여부
    resave: true,
    // 세션에 저장할 때 초기화 여부
    saveUninitialized: true,
  })
);

app.use(pageRouter);
app.use(tokenRouter);
app.use("/userVerify", verifyRouter);

// 미들웨어로 실행

app.listen(8000, () => {
  console.log("다른 폴더에서 성공했구나 이녀석...");
});
