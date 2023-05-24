const e = require("express");
const path = require("path");
const dot = require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./models");
const usersRouter = require("./routers/users");
const postRouter = require("./routers/posts");
const commentRouter=require('./routers/comments');
const mypageRouter=require('./routers/mypage');

const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
// admin1234
app.use(
  session({
    secret: process.env.KEY2, //세션 키
    resave: false, //다시 저장할지 여부
    saveUninitialized: false, //초기화 할 지 여부
  })
);

app.use(e.urlencoded({ extended: false }));
app.use("/users", usersRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/mypage", mypageRouter);
sequelize
  .sync()
  .then(() => {
    console.log("Database connection established.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(8080, (req, res) => {
  console.log("ㄱㄱ");
});
