// 처음 프로젝트 만들었으면 이제

const e = require("express");
const path = require("path");
const mysql2 = require("mysql2");

// ejs 설치
// npm i ejs

// npm init -y
// pacakge.json 기본값 설정 생성

// 사용할 모듈 express,ejs,mysql2 path
// express실행
const app = e();

// mysql12연결
const mysql = mysql2.createConnection({
  // password가 database 아래에 있으면 오류뜸
  user: "root",
  password: "q1w2e3R$",
  database: "test2",
  // 다중 쿼리문 사용할 수 있는 옵션
  // multipleStatements :true,
  multipleStatements: true,
});
// 경로지정, 지정 안해주면 express에서는 views라는 폴더로 지정(나한텐 없는)
const pathTemp = path.join(__dirname, "page");

// express의 views 속성을 설정(파일들의 경로)
// express에서 서버사이드 렌더링을 지원하기 위해 view엔진을 사용한다.
// view엔진이 템플릿 파일을 보여주는 역할을 해줌
// 즉, views는 express의 고정된 key값이다.
console.log(app)
app.set("views", pathTemp);

app.set("view engine", "ejs");

// express에서 bodyparser를 지원한다.
// extended:깊은 객체를 지원할지 안할지, 권장 false
app.use(e.urlencoded({ extended: false }));
// PORT지정
const PORT = 8080;

app.listen(PORT, () => {
  console.log("성공했구나 이녀석...");
});

app.get("/", (req, res) => {
  // render메서드 view엔진이 문자열을 html로 브라우저에 전달
  // 랜더링 해준다.
  // 첫번째 매개변수가 파일의 이름
  // 두번째 매개변수 전달할 데이터
  res.render("main");
});

// 게시판의 글목록 페이지
app.get("/list", (req, res) => {
  const sql = "SELECT * FROM products";
  mysql.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("list", { data: result });
    }
  });
});

// 게시판 등록 페이지
app.get("/insert", (req, res) => {
  res.render("insert");
});

// 삭제
app.get("/delete/:id", (req, res) => {
  // 글 목록이 있고, 각 글에 대한 고유 번호(이는 곧 데이터베이스 안에 있는 id를 말한다.)가 있고 이를 데이터베이스의 id와 매치시켜 삭제
  //여기서 CNT는 @로 선언한 변수이며 id를 1부터 시작하기 위해 +1한 것을 대입 그 다음 products 의 자동 올라감을 0으로 초기화

  const sql =
    "DELETE FROM products WHERE id = ?;SET @CNT = 0;UPDATE products SET products.id = @CNT:=@CNT+1; ALTER TABLE products AUTO_INCREMENT=0;";
  // DELETE FROM products WHERE id = ? 값을 제거하라는 명령어인 쿼리문
  // 테이블 products의 행에서 ? 에 값을 넣어줄거고
  // 우리가 넘겨준id 값을 가지고 있는 행을 찾아서 제거시킨다.

  // SET @CNT=0 구문으로 카운트 0으로 초기화

  // UPDATE products SET products.id = @CNT:=@CNT+1 => products 테이블의 행의 아이디를 다시 갱신 시켜줌.
  // ALTER TABLE products AUTO_INCREMENT=0; : AUTO_INCREMENT 속성을 자동으로 1씩 증가시키는 속성을 0으로 변경
  mysql.query(sql, [req.params.id], () => {
    res.redirect("/list");
  });
});

// 수정

app.get("/edit/:id", (req, res) => {
  const sql = "SELECT * FROM products WHERE id=?";
  const id = req.params.id;
  mysql.query(sql, [id], (err, result) => {
    res.render("edit", { data: result[0] });
  });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // 요청에 대한 내용은 req객체에 들어있다.
  // 그 안에 있는 body객체에 존재
  // 구조분해할당으로 가져옴
  const { user_id, user_pw } = req.body;
  console.log(user_id, user_pw);
  // 전달받은 데이터로
  // 데이터 베이스에 아이디와 비밀번호가 동일한 내용이 있는지 확인하고
  // 응답받은 데이터가 있다면
  // 사용자가 회원가입을 진행 했다는 내용이니 로그인 시켜준다,

  //user_id 랑 user_pw를 가지고 데이터를 조회
  const sql = "SELECT * FROM users WHERE user_id =? AND user_pw=?";
  mysql.query(sql, [user_id, user_pw], (err, result) => {
    if (err) {
      console.log(err);
      res.render("mypage");
    } else {
      // 로그인 성공
      //   결과는 하나하나의 행이 객체로 배열에 담겨져서 온다.
      console.log(result);
      res.render("mypage", { data: result[0] });
    }
  });

  //   res.send("user_id:" + user_id + "user_pw:" + user_pw);
});

// 회원가입

app.post("/signup", (req, res) => {
  const { user_id, user_pw } = req.body;
  console.log(user_id, user_pw);
  const sql = "INSERT INTO users (user_id,user_pw)VALUES(?,?)";
  mysql.query(sql, [user_id, user_pw], (err, result) => {
    if (err) {
      res.render("error");
    } else {
      res.redirect("/login");
    }
  });
});

// 게시글 넣기
app.post("/insert", (req, res) => {
  const { name, number, series } = req.body;
  const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
  mysql.query(sql, [name, number, series], (err, result) => {
    res.redirect("/list");
  });
});

// 게시글 수정
app.post("/edit/:id", (req, res) => {
  const { name, number, series } = req.body;
  const sql = "UPDATE products SET name= ?,number =? ,series=? WHERE id=?";
  mysql.query(sql, [name, number, series, req.params.id], (err, result) => {
    res.redirect("/list");
  });
});
