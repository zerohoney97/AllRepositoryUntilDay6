//여기서 사용할 모듈 express path
// path는 내장 모듈
// path 모듈은 경로에 대한 조작을 도와주는 모듈
// 파일 시스템의 경로들을 상대경로나 절대경로 설정 할 수 있도록 도와주는 모듈
// 상대경로나 절대 경로를 쉽게 연경할 수 이도록 메서드를 지원해준다.

const e = require("express");

const path = require("path");

// 서버 인스턴스 생성
const app = e();

// get 방식 요청해서 데이터를 가져오는 메서드
// get 방식으로 /url 요청을 하면
app.get("/", (req, res) => {
  //루트 경로 처리
  // join메서드가 전달받은 경로를 합쳐주는 동작을 해줌
  const body = path.join(__dirname, "views", "index.html");
  //   파일까지의 경로를 만들어주고
  console.log(body);
  //   res.send("");
  res.sendFile(body);
});
// res.send와 end의 차이점은 send는 자동으로 header를 설정해준다.
// 하지만 end는 수동으로 header를 설정해 주어야한다.

app.get("/list", (req, res) => {
  const body = path.join(__dirname, "views", "list.html");

  //   브라우저로 파일 보내준다.
  res.sendFile(body);
});

app.get("/myPage", (req, res) => {
  const body = path.join(__dirname, "views", "mypage.html");
  res.sendFile(body);
});


app.listen(8080, () => {
  console.log("good");
});
