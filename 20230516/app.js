// 로그인 회원가입을 이제 만들 수 있다.

// crypto 내부 모듈
// 암호화

// 비밀번호를 만들 때 단방향 암호화를 사용하는데
// 단방향 양방향 암호화 방식

// 단방향은 복호화가 불가능하다.(원본값을 알 수 없다. 비밀번호를 만들 때 사용하고 원본의 값을 알아낼 수가 없기에 안전하다.)
// 양방향은 복호화가 가능하다.(데이터를 전송할 때 데이터를 암호화해서 안전하게 전달할 때 사용)

// 우리가 사용하는 네이버 같은 사이트들이 비밀번호를 찾기를 시도하면
// 비밀번호를 알려주거나 메일로 전송해주지 않고 비밀번호 변경을 시켜준다.
// 원본 비밀번호를 알수가 없기 때문에

// 복호화는 암호문을 원본으로 변경 해주는것.

// 단방향 암호화는 원래값을 알 수 없게 복잡한 알고리즘으로 암호화 시켜주기 때문에
// 원본값을 복호화 할 수가 없다.

// crypto 모듈을 사용해서 암호화를 만들어보자.
// 내장 모듈이고 기본적인 암호화 알고리 기능을 제공해준다.
const crypto = require("crypto");
const e = require("express");
const path = require("path");
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");
const mysql2 = require("mysql2/promise");

// 임의의 비밀번호를 변수에 담아주자

const pw = "admin1234";

// 해시화: 알고리즘을 통해 데이터를 고정된 크기의 고유한 값을 바꿔주는것
// 해시 객체 생성
// let hashA = crypto.createHash("sha256");
// 사용할 알고리즘은 sha256암호 알고리즘 사용
// 256bit의 고정크기 해시값으로 변환해주는 알고리즘
// 원본 데이터의 길이에 상관이 없이 항상 256 bit(32byte)의 해시값을 생성한다.
// 64자리의 16진수로 표현
// 16진수 컴퓨터의 포토샵 색상 코드 같은 등 암호화 등에서 사용한다.

// 16진수 구하기

// 10진수를 16으로 나누고 나머지를 16진수로 표현 나눈 몫을 0이 될 때까지 반복

// let hashing = hashA.update(pw); //매개변수로 암호화 시킬 문자열

// console.log(hashing);

// 객체를 확인해보면 false값이 있는데 아직 인코딩이 완료되지 않은 상태
// digest메서들 사용해서 해시값을 반환 매개변수로 반환받을 인코딩 방식 지정

// let hashString = hashing.digest("hex");
// 해시값을 16진수의 문자열로 반환

// console.log(hashString);

// 해시화를 하면 일정한 문자열이 나오는데

// salt값을 사용해서 예측이 불가한 데이터를 만들어 주자
// 랜덤한 값을 우리가 만들어서 원본의 데이터에 추가해서 암호화 시켜주는 것,

// salt 값은 지정했을 때 =>env

// salt값을 만들어보자
// 난수 생성 메서드를 사용해서 salt값

// crypto.randomBytes(32, (err, result) => {
//   // 32bit 길이의 랜덤한 byte가 생성
//   if (err) {
//     console.log(err);
//   } else {
//     // result는 buffer형태인데 이를 16진수로 변경
//     console.log(result.toString("hex"));
//   }
// });

// 이렇게 난수를 만들어서 회원가입할 때 계정마다 salt값을 주고 사용하는 방법도 있다.(salt 값을 데이터베이스에 같이 저장)
// 모든 패스워드가 고유의 salt값을 가지고 있게 만들 수 있다.

const app = e();

const mysql = mysql2.createPool({
  user: "root",
  password: "q1w2e3R$",
  database: "test4",
  multipleStatements: true,
});

// 테이블 초기화F
const userInit = async () => {
  try {
    await mysql.query("SELECT * FROM users2");
  } catch (error) {
    await mysql.query(
      "CREATE TABLE users2(id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20),user_pw VARCHAR(20),salt VARCHAR(255))"
    );
  }
};
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(e.urlencoded({ extended: false }));
app.listen(8080, () => {
  console.log("성공했구나 이녀석..");
});
// salt값 만들어주는 함수
const createSalt = () => {
  // 암호화에 시간이 좀 걸리기 때문에
  return new Promise((res, rej) => {
    // 랜덤바이트 64
    crypto.randomBytes(64, (err, result) => {
      if (err) {
        // 실패시 err객체 rej메서드로 반화
        // 성공하면 resolve 메서드로 결과를 16진수로 변환해서 반환
        rej(err);
      } else {
        res(result.toString("hex"));
      }
    });
  });
};

// salt 값도 사용을 하고
// 키 스트레칭 기법
// 키 스트레칭 기법은 해시함수를 여러번 반복 시켜서 시간을 일부러 오래 걸리게 만드는 기법
// 해킹을 시도할 때 비밀번호들을 대입해서 해킹을 시도하는 경우 암호화 작업을 일부러 오래 걸리게 만들어서 해킹을 어렵게 만든다.
// 무차별로 비밀번호를 대입하는 공격을 힘들게 만드자.
// 해킹범 짜증나게 하자

// pbkdf2 메서드를 사용해서 키 스트레칭 기법 사용

const createHash = (salt, password) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(
      password, //해싱할 값을 문자열로 전달
      salt,
      1651, //키 스트레칭 반복횟수 , 반복횟수가 많아질수록 어렵게 암호가 되는데 시간도 오래 걸린다.
      64, //해시값의 바이트 64 바이트
      "sha256", //해시화 알고리즘
      (err, hash) => {
        if (err) {
          rej();
        } else {
          res(hash.toString("hex"));
        }
      }
    );
  });
};

const test = async () => {
  const salt = await createSalt();
  const hash = await createHash(salt, pw);
  console.log(hash);
};

// 간단하게 회원가입 만들어보자.
// 이번 방식은 salt라는 값을 각각의 회원마다 고유의 salt값을 가지게 만들거예요

// 프로젝트 시작

app.get("/", (req, res) => {
  res.render("join");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/join", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const salt = await createSalt();
  const hash = await createHash(salt, user_pw);
  await mysql.query("INSERT INTO users2 (user_id,user_pw,salt) VALUES(?,?,?)", [
    user_id,
    hash,
    salt,
  ]);
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const [result] = await mysql.query("SELECT * FROM users2 WHERE user_id=? ", [
    user_id,
  ]);
  if (result[0]?.salt) {
    const salt = result[0].salt;
    const hash = await createHash(salt, user_pw);

    if (result[0].user_pw == hash) {
      res.send("로그인 성공");
    } else {
      res.send("비밀번호 틀렸음");
    }
  } else {
    res.send("유저가 없어용");
  }
});
