// mysql에 연결 해볼거임

// 외부 모듈 설치

// 이번에 설치받아서 사용할 모듈은 mysql2 모듈을 설치받아서 사용할 예정

// --------------------------------------------------------------------

// npm install mysql2
// npm i

// --------------------------------------------------------------------

// node_module이 없으면 프로젝트 실행 안됨.

// 우리는 일일히 설치할 필요없지
// npm install 로 dependencies의 내용의 모든 모듈을 다 설치 받음
//   "dependencies": {
//     "mysql2": "^3.2.4"
//   }
// ^^ 왜 웃음?
// 이는 명시한 버전이 없으면 다른 버전을 찾아서 설치받는다는 내용
// 실제 설치된 버전은 lock.json이 있다!

// mysql 모듈도 있어요, 근데 왜 mysql2씀?
// mysql모듈은 콜백 기반으로 promise 기반으로 사용하기가 힘긂....그래서
// mysql2를 사용할거고 . mysql2가 promise 기반을 지원하기 떄문에 사용하기 편하다.
// mysql2 사용하라고 공식문서에도 권장을 함...

// mysql2모듈 가져오자
const mysql2 = require("mysql2");

// 연결하자
// 매개변수로 연결하는 Mysql의 옵션을 전달 해줘야한다.
// host:연결할 호스트를 나타냄 root
// port:연결할 포트 3306 포트에 기본적으로 열림
// user:사용자의 이름
// password:사용자 비밀번호
// database: 어떤 데이터 베이스를 연결 시킬건지
const temp = mysql2.createConnection({
  user: "root",
  password: "q1w2e3R$",
  database: "test2",
});

// temp에 연결한 mysql 객체를 반환
// 이 객체안에는 쿼리문을 작성해거 데이터베이스 쿼리 작업을 시켜줄 수 있는 메서드가 있다.

// query메서드: 쿼리문을 매개변수로 전달해서 데이터베이스의 쿼리 작업을 시킬 수 있다.
// products 테이블이 있는지 확인
temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    //테이블 x
    console.log(err);
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),number VARCHAR(20),series VARCHAR(20))";
    //   쿼리문 내욜
    // products 이름의 테이블을 만드는데
    // id 칼럼은 INT 숫자형
    // AUTO_INCREMENT:자동으로 값이 증갈할수 있도록 설정 PRIMARY KEY에 주로 사용합니다.
    // PRIMARY KEY:테이블에는 고유한 값을 가지고 있는 칼럼 하나 무조건 필요한데 고유한 값을 설정하는데 PRIMARY KEY로 설정한다.
    //name,number,series 이런 컬럼에는 VARCHAR문자열이고 괄호에 글자 수를 정해줄 수 있다.
    temp.query(sql);
    console.log("테이블 없어서 만듦");
  } else {
    console.log(res);
    console.log("테이블 o");
  }
});
