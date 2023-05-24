// 비행기 좌석을 만드는데 좌석을 1,2,3번 비행기로 나누어서
// 각 비행기의 좌석을 예약 할 수 있게

const e = require("express");
const path = require("path");
const socketIo = require("socket.io");
// 사용할 모듈
// socket.io,express,ejs
// 서버 대기
// view 세팅
// 소켓 연결까지

const app = e();

// 현재 선택된 자리들을 보여줄 배열
let seats = [];

let temp = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

let temp2 = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];
let temp3 = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

let seatsArr = [temp, temp2, temp3];
// 선택한 비행기의 인덱스
let index = 0;

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(e.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/seats/:id", (req, res) => {
  index = req.params.id;
  seats = seatsArr[index];
  // 요청에 대한 응답으로 seatsArr배열에서 id로 전달한 인덱스로 호출한 배열을
  // 응답해준다.

  res.send(seats);
});

const server = app.listen(8080, (req, res) => {
  console.log("gogo");
});
const io = socketIo(server);
io.sockets.on("connection", (socket) => {
  console.log("유저 입장");
  socket.on("reserve", (data) => {
    console.log(data.selectCount, "에약");
    let seatTemp = seatsArr[data.selectCount];
    seatTemp[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });
});
