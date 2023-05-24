// 웹 소켓
// 웹 소켓을 사용하는 이유
// 양방향 통신을 위해
// 단방향으로 요청 응답을 받는 구조고

const e = require("express");
const path = require("path");
const socketIo = require("socket.io");
const app = e();

const server = app.listen(8080, () => {
  console.log("gogo2");
});

// socket 객체 생성
const io = socketIo(server);
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("main2");
});

io.sockets.on("connection", (socket) => {
  // 클라이언트 접속 했을 때
  socket.on("message", (data) => {
    // 모든 클라이언트에게 이벤트 푸쉬
    io.sockets.emit("message", data);
  });
});
