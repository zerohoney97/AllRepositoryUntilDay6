// 웹 소켓
// 웹 소켓을 사용하는 이유
// 양방향 통신을 위해
// 단방향으로 요청 응답을 받는 구조고

const e = require("express");
const path = require("path");
const socketIo = require("socket.io");
// 서버에서 데이터를 푸쉬하는 경우

// 웹 소켓의 장점
// 헤더의 값이 같이 넘어가는데
// 한 번 연결할 때 헤더값을 전송하기 때문에 오버헤드
// 많은 데이터가 전송이 되지 않는다.

// 실시간으로 채팅을 구현하거나 실시간으로 해야하는 작업이 있을 경우 사용

// 가상화폐 거래소 같은 경우 데이터 전송이 자주 일어나는 경우
// 웹소켓을 사용해서 구현 하는게 좋다.

// 효율적인 데이터 통신

// socket.io라는 라이브러리를 사용 해보자.
// 페이지에서 덧글을 달았다고 가정했을때
// 페이지를 새로고침해야 글이 다시 보이는 현상

// 웹소켓으로 양방향 통신을 이용해서 실시간으로 글이 보이게 처리할 수 있다.

const app = e();
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

// 유저가 접속을 하고 또 다른 유저 한명 더 접속을 하고
// 유저끼리 실시간 채팅을 할 수 있게
app.get("/", (req, res) => {
  res.render("main");
});

const server = app.listen(8080, (req, res) => {
  console.log("gogo");
});
// 대기 상태의 서버 전달
const io = socketIo(server);
// 소켓 연결이 되고
let userId = [];

// 소켓들에게 이벤트를 등록
io.sockets.on("connection", (socket) => {
  // connection:접속시 실행되는 이벤트
  // 접속한 클라이언트의 socket이 매개변수로 들어온다.
  // 유저 한명이 접속 했다는 얘기
  console.log("유저 접속");
  console.log(socket.id);
  //   배열에 push
  userId.push(socket.id);
  //   클라이언트 측에서 이벤트가 푸쉬되면 실행 시킬 이벤트
  socket.on("hi", (data) => {
    // 자기 자신에게 이벤트 푸쉬
    console.log(data, "이벤트를 클라이언트에게 보냄");

    // 모든 대상에게 이벤트 푸쉬
    // io.sockets.emit('hi','모두에게');

    // 자기 제외 모든 대상에게 이벤트 푸쉬

    // socket.broadcast.emit("hi", data.msg);
    // 비밀 대화 방을 파서 채팅 할 때 하자

    // 대상에게 보낼 예정
    // 이벤트를 푸쉬할 유저의 아이디값을 to메서드의 매개변수로 전달
    io.sockets.to(data.id).emit("hi", data.msg);
  });
  //   유저가 접속을 해제 했을 때
  socket.on("disconnect", () => {
    // 유저가 접속을 해제했을 때 실행
    console.log("유저 나감");
    userId = userId.filter((a) => {
      return a != socket.id;
    });
    console.log(userId);
  });
});
