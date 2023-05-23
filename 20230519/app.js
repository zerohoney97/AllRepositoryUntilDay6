// 시퀄라이즈 ORM (객체관계 매핑)
// 객체와 데이터 베이스를 ORM 라이브러리가 매핑을 시켜주어서 자바스크립트 구문으로 SQL을 제어할 수 있다.
// 자바스크립트로만 sql작업을 할 수 있도록 도와주는 라이브러리

const e = require("express");
const path = require("path");
const dot = require("dotenv").config();
const { sequelize, User, Post } = require("./models");

// 설치할 모듈은 express,ejs,sequelize mysql2
// 서버 객체 만들고
// 등등
const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(e.urlencoded({ extended: false }));

// 시퀄라이즈 구성 연결 매핑
// sync함수는 데이터베이스를 동기화 시켜주는 메서드
// true일때는 초기화가 된다.
// false 일때는 초기화 안됨
sequelize
  .sync({ focus: false })
  .then(() => {
    // 연결 성공
    console.log("연결 성공");
  })
  .catch((err) => {
    console.log(err);
    // 연결실패
  });

app.get("/", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res) => {
  const { name, age, msg } = req.body;
  // create insert 문을 실행 시켜주는 메서드
  // 매개변수로 컬럼의 내용을 객체로 만들어서 전달
  User.create({
    // name 컬럼의 값
    name: name,
    // age 컬럼의 값
    age: age,
    // msg 컬럼의 값
    message: msg,
  })
    .then(() => {})
    .catch((err) => {
      console.log("app create", err);
    });
  res.send("값 추가");
});

app.get("/main", (req, res) => {
  // findAll메서드에 매개변수로 검색 조건을 객체로 추가 할 수 있다.
  User.findAll()
    .then((e) => {
      res.render("main", { data: e });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/create_post", (req, res) => {
  const { name, value } = req.body;
  console.log(name, value);

  // 한개의 값을 조회 메서드
  User.findOne({
    // 검색 조건 추가
    where: { name: name },
  }).then((e) => {
    Post.create({
      msg: value,
      user_id: e.id,
    });
  });
  res.send();
});

app.get("/view/:name", (req, res) => {
  // 유저를 조회하고 가지고 있는 글을 볼거임
  User.findOne({
    where: { name: req.params.name },
    // 관계형으로 불러온 값을 다 풀어서 볼수가 있다.
    // raw:true,
    // 해당 유저의 id로 참조된 user_id가 있는 post테이블의 값을 같이 조회한다.
    include: [
      // 조회할 모듈 post 모델
      { model: Post },
    ],
  }).then((e) => {
    e.dataValues.Posts = e.dataValues.Posts.map((a) => {
      return a.dataValues;
    });
    const Posts = e.dataValues;
    res.render("view", { data: Posts });
  });
});

app.listen(8080, (req, res) => {
  console.log("성공했구나 이녀석");
});
