const e = require("express");
const path = require("path");
const session = require("express-session");
// 로그인 라우터
const { signInrouter } = require("./router/signIn");
// 회원가입 라우터
const { signUprouter } = require("./router/signUp");
//게시판 라우터
const { boarRouter } = require("./router/board");
const { mypageRouter } = require("./router/mypage");

const nowLogin = {};

const app = e();

// --------------------------temp--------------------------
const { primitiveUserFun } = require("./models/users");
// --------------------------temp--------------------------

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(e.json());
app.use(e.urlencoded({ extended: false }));

app.use(
  session({
    // 세션을 발급할 때 사용할 키
    secret: process.env.KEY2,
    // 세션이 변경되거나 저장할 때나 불러올 때 다시 저장할지 여부
    resave: true,
    // 세션에 저장할 때 초기화 여부
    saveUninitialized: false,
  })
);
app.use(e.static(path.join(__dirname, "public")));

app.use("/signIn", signInrouter);
app.use("/signUp", signUprouter);
app.use("/board", boarRouter);
app.use("/mypage", mypageRouter);

app.listen(8080, () => {
  console.log("성공했구나 이녀석...");
});
app.get("/", (req, res) => {
  const data = req.query.id;
  res.render("main", { data: data });
});
