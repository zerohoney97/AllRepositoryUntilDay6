// express와 템플릿 엔진을 같이 사용해서
// 게시판 만들어보자.
// ejs 템플릿 엔진

const e = require("express");

// 템플릿 엔진은 서버측에서 html을 만들어서 브라우저에 보여주는것.
// 서버 사이드 렌더링(SSR)

// 나중에는 분리할 예정
// html과 동일하고 js를 같이 추가해서 동적인 웹페이지를 만들 수 있는 템플릿 엔진.

// express에서 ejs를 지원한다.
// 서버 측에서 html 템플릿을 그려주고
// 이러한 기법을 서버 사이드 렌더링 이라고 한다.
// 검색 기능 및 페이지 로딩이 빠르다.

// body-parser는 express미들웨어
// 요청으로 받은 body의 내용을 req객체 안에 있는 body라는 key에 value 담아준다.
// req.body로 호출이 가능해진다.
// 미들웨어라는건 쉽게 요청과 응답을 하는 사이 중간에 동작하는 함수

// 사용할 모듈 express,ejs,mysql2,body-parser,path

const mysql2 = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");

// 서버 인스턴스
const app = e();

// express에 set메서드와 use 메서드가 있습니다~
// set 메서드: express의 view 등등 설정을 할 수가 있다.
// 그려줄 파일이 있는 폴더의 경로 같은 설정을 할 수가 있다.

// use 메서드:요청 또는 응답시 실행되는 미들웨어를 추가 할 수 있다.

// express의 view 속성을 경로로 지정
// express view로 사용할 파일들의 경로
// express도 서버사이드 렌더링을 지원해주기 때문에 view엔진을 사용한다.
// view엔진은 html등의 템플릿 파일을 보여주는 역할을 하는데
app.set("views", path.join(__dirname, "views"));

// view엔진을 ejs로 사용하겠다 설정
// html 확장자도 ejs로 변경
app.set("view engine", "ejs");

// app.use(
//   bodyParser.urlencoded({
//     // urlencoded from 데이터를 파싱을 도와주는 미들웨어
//     extended: false,
//   })
// );
//extended true: query string 모듈의 기능이 좀 더 확장된 qs모듈을 사용한다.(깊은 객체를 지원)
// false: express 기본 내장된 쿼리 스트링 모듈 사용(깊은 객체 지원 x)
// 권장은 false
// 복잡한 데이터를 다루게 되면 쓸 수도 있겠는데 없으니 false로 사용하자.

// express 버전이 올라가면서 bodyParser를 지원해준다.
app.use(e.urlencoded({ extended: false }));

const mysql = mysql2.createConnection({
  user: "root",
  password: "q1w2e3R$",
  database: "test2",
});

mysql.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),number VARCHAR(20),series VARCHAR(20))";
    mysql.query(sql);
  } else {
    console.log(res);
  }
});

app.get("/", (req, res) => {
  // 루트 경로로 요청시 처리
  // 메인페이지
  mysql.query("SELECT * FROM products", (err, result) => {
    // render 메서드 view엔진이 문자열을 html로 브라우저에 반환해서 렌더링 해준다.
    // 첫번째 매개변수가 view로 설정한 폴더경로에 파일의 이름을 문자열로 전달.
    // 두번째 매개변수 템플린 엔진에서 사용할 데이터(객체 형식)
    res.render("main", { data: result });
  });
});

// 추가하는 페이지로 가자
// 리스트를 추가하는 페이지

// get 방식 요청인지,post 방식 요청인지 나뉨
app.get("/insert", (req, res) => {
  res.render("insert");
  res.send();
});

app.post("/insert", (req, res) => {
  const data = req.body;
  // body 객체 안에 form에서 요청을 보냄
  // 데이터가 객체로 들어있다. 객체 안에 있는 키값들은
  // inputdml name으로 정해준 키로 값이 들어있다.
  // 우리가 요청한 데이터의 내용을 데이터 베이스에 추가하자
  const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
  console.log(data);
  // query 메서드 두번째 매개변수로 배열의 형태로 value를 전달 해 줄수 있다.
  //   순서대로 ?에 들어감
  mysql.query(sql, [data.name, data.number, data.series], (err, result) => {
    // redirect 메서드로 매개변수로 전달한 URL로 페이지를 전환 시킨다.
    // 경로로 이동시킨다.
    res.redirect("/");
  });
});

// 삭제를 해봅시다.
app.get("/delete/:id", (req, res) => {
  // :id url요청에서 파라메터 값이라고 합니다.
  // 아는 req.params.id로 가져올 수 있다.
  const sql = "DELETE FROM products WHERE id=?";
  mysql.query(sql, [req.params.id], () => {
    res.redirect("/");
  });
});

app.listen(8080, () => {
  console.log("성공했구나 이녀석..");
});

