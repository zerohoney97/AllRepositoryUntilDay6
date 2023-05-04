// http 요청과 응답을 좀 더 편하게 사용할 수 있도록 도와주는 모듈
// express nodejs에서 제일 인기가 많은 모듈
// nodejs프레임 워크
// http 요청과 응답을 더 쉽게 작성할 수 있도록 도와준다.
// 기본적인 기능만 포함하고 있어서.
// 자유도 높고 라우팅 미들웨어 등등 개발자가 원하는 방식으로
// 구성할 수 있다.
// 본인만의 보일러 플레이팅이 가능하다.
// 보일러 플레이팅=>반복적인 작업을 미리 작성해서 개발의 생산성을 높임
// express를 사용해보자 일단.

const e = require("express");

// 설치 부터 받아 express
// npm

// 서버 객체가 생성
const app = e();

// 메소드를 사용해서
// app.get();
// 요청의 내용이 get메소드인지 post메소드인지
// app.post();

app.get("/", (req, res) => {
  // send 메소드로 응답하고 종료
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("성공했구나 이녀석..");
});

// pacakge.json에 스크립트 명령어 작성
//     "test": "echo \"Error: no test specified\" && exit 1",
// "start": "node 20230502/index.js"
// "dev":"node 20230502/index.js"

// start명령어는 ===npm start
// 별도의 네이밍으로 우리가 작성한 스크립트 명령어 실행
// 예)dev 가정하면 npm run dev 이렇게 실행 하면 된다.(start는 특별)
