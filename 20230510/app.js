const e = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
// dotenv 모듈 가져오기 config메서드 바로 실행
const dot = require("dotenv").config();
// process.env 객체에 우리가 .env파일에 설정한 이름으로 키값이 들어있다.
const KEY = process.env.KEY;

// JWT토큰을 만들건데
// 비밀키를 가지고 토큰을 만들어서 암호화를 시킬 예정
// 이 비밀키를 탈취 안되게 env에 보관
const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
// body 사용하기 위해서 extended 설정은 깊은 객체 사용할지 안할지
app.use(e.urlencoded({ extended: false }));

app.listen(8080, () => {
  console.log("성공했구나 이녀석....");
});

app.get("/", (req, res) => {
  res.render("main");
});

app.post("/login", (req, res) => {
  // 로그인을 정상적으로 했다 가정하고
  // 토큰을 발급
  // 유저 정보는 변수로 만들어 주자.
  const name = "user1";
  const KEY = process.env.KEY;
  // sign 메서드 JWT 토큰을 생성
  // 첫번째 매개변수 payload
  // 두번째 매개변수 비밀키,
  // 세번째 매개변수 header
  let token = jwt.sign(
    {
      // 타입은 JWT
      type: "JWT",
      // 유저 이름
      name: name,
    },
    KEY,
    {
      // 토큰을 유지 시킬 유효시간 만료시간
      // 5분 유지 시킬 토큰
      expiresIn: "5m",
      // 토큰 발급한 사람
      issuer: "user1",
    }
  );
  res.send(JSON.stringify(token));
  //   점으로 구분해서 첫번째가 header,두번째가 payload,세번째가 signature
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NTU4LCJleHAiOjE2ODM4NTg4NTgsImlzcyI6InVzZXIxIn0.UkVJVrx0JPSA8WOBm1JpSQrmasn4mFTfoZZMzSecBcw
});

// 로그인 할 때 검증
// JWT 토큰을 사용합니다~

// Json Web Token
// 웹표준으로 두 객체의 JSON객체를 사용해서 정보를 안정성 있게 전달 해준다.

// JWT은 사용할 정보를 자체적으로 가지고 있다.(우리가 필요한 것들 유저 정보같은)
// JWT로 발급한 토큰은 기본정보(유저의 정보 프로필)
// 그리고 토큰이 정상인지 검증(서명을 포함 하고 있다. signature)

// 주로 로그인이 정상적인지 회원 인증 권한에서 사용한다.

// JWT은 유저가 로그인을 요청하면 서버에서 유저의 정보를 가지고
// 정상적인 루트로 로그인을 요청한 유저면 토큰을 발급해서 전달해준다.
// 유저가 서버에 요청을 할 때 JWT 토큰을 포함해서 요청을 하면 서버가
// 요청을 받고 토큰이 썩은건지 착한건지 검사해서 유저가 요청한 작업을 처리해주고 응답해준다.

// JWT를 쓰는 이유는 안정성 있게 정보를 전달해서 요청을 할 수 있다.

// JWT를 생성하면 사용할 모듈이 인코딩과 해싱작업을 해준다.
// HMAC:해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
// SHA256:임의의 길이 메시지를 256bit의 축약된 메시지로 만들어내는 해시 알고리즘.

// JWT의 구조

// ------------------------------------
let header = {
  // 사용하는 해싱 알고리즘
  alg: "SHA256",
  //   토큰의 타입
  type: "JWT",
};

let payload = {
  // 토큰의 이름 제목
  sub: "546534",
  //   유저의 이름(유저 프로필)
  name: "namae",
  //   토큰 발급된 시간, 발급된지 얼마나 지났는지
  lat: "123123123",
};
// ------------------------------------

// 비밀 키 생성

// let signature = HMACSHA256(BASE64URL(header)) + BASE64URL(payload);

// header:타입과 알고리즘의 정보를 가지고 있고.
// payload:유저의 정보와 만료기간이 포함된 객체를 가지고 있다.
// signature:header,payload을 인코딩하고 합쳐서 해싱해 비밀키로 만듦.

// 사용할 모듀 express,jsonwebtoken,dotenv
// dotenv 어플리케이션을 만들때 설정값을 이 곳에 작성
// 보안=>민감한 정보를 .env 파일에 설정값들을 작성 해둔다.
// 비밀 키, 암호, API 토큰 등등을 저장해놓는다.

// 페이지 부터 만들자.
