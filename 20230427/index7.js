// 웹서버 ㄱ

// 내장모듈 가져오자
const http = require("http");

// createServer 메소드는 서버 객체를 만들어 주고
// 클라이언트의 요청을 받으면 호출이 된다.
// 전달된 콜백 함수는 클라이언트의 요청을 받아서 처리 후
// 클라이언트에 응답해준다.

const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("serverOn");
});

// 포트
// 3000번 포트 같은... 포트를 지정하는 이유
// 네트워크 프로세스를 나눠 주기 위해서
// http 80 https 433
// 시스템 예약 포트이외의
// 사용하지 않을 것 같은 포트들을 사용하면 된다.
// 1025~65535까지 안에서
// 거의 많이 사용되는건 8000,8080

const PORT = 4000;

// 서버 객체의 listen 메소드를 호출해서
// 클라이언트의 요청을 대기상태로 만들어 줄 수 있다.
// 이벤트 루프를 돌면서 요청이 오기까지 대기를 하다가
// 요청이 오면 응답해준다.
// listen매개 변수로 첫번째로 port
server.listen(PORT, () => {
  console.log(+PORT + "=>  이녀석..성공했구나");
});
