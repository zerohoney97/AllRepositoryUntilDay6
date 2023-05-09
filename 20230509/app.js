const e = require("express");
const path = require("path");
// 로그인 라우터
const { signInrouter } = require("./router/signIn");
// 회원가입 라우터
const { signUprouter } = require("./router/signUp");

const app = e();

// --------------------------temp--------------------------
const { primitiveUserFun } = require("./models/users");
// --------------------------temp--------------------------

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(e.json());

app.use(e.urlencoded({ extended: true }));

app.use(e.static(path.join(__dirname, "public")));

app.use("/signIn", signInrouter);
app.use("/signUp", signUprouter);

app.listen(8080, () => {
  console.log("성공했구나 이녀석...");
});
app.get("/", (req, res) => {
  res.render("main");
});

// primitiveUserFun.init();
