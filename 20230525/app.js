// 채팅방 만들기
// 방을 따로 나눠서
// 유저간에 귓속말

const e = require("express");
const path = require("path");
const socketIo = require("socket.io");
// 모듈 express socket.io ejs
// 서버 대기상태
// view엔진 세팅
// socket 연결
const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(e.urlencoded({ extended: false }));
const server = app.listen(8080, () => {
  console.log("gogo");
});

app.get("/", (req, res) => {
  res.render("main");
});

let userId = [];
let roomUser = [];
const io = socketIo(server);

io.sockets.on("connection", (socket) => {
  // 유저 접속시 배열에 유저의 아이디를 추가
  userId.push(socket.id);
  console.log(userId);
  socket.on("joinRoom", (room, name) => {
    // 방에 유저가 접속하면
    // join 메서드로 방에 입장 시킨다.
    // 방의 개념

    socket.join(room);
    // 현재 방에 있는 클라이언트에게 이벤트 푸쉬
    // 어느 바에 누가 접속했는디
    io.to(room).emit("joinRoom", room, name, socket.id);
  });
  socket.on("leaveRoom", (room, name) => {
    // 유저가 방에서 나가면
    // 유저가 방에서 제외되게 해주고
    socket.leave(room);
    // 어느 방에서 누가 나갔는지 해당 방에 있는 유저들에게 이벤트 푸쉬
    io.to(room).emit("leaveRoom", room, name);
  });

  socket.on("disconnect", () => {
    userId = userId.filter((a) => {
      return a != socket.id;
    });
    console.log("현재 접속중인 유저 id", userId);
  });
  socket.on("chat", (room, name, msg) => {
    io.to(room).emit("chat", name, msg);
  });
  socket.on("chat2", (id, name, msg) => {
    io.to(id).emit("chat", name, "귓속말:" + msg);
  });

  socket.on("addToTab", (num, room, name) => {
    if (roomUser[num] == undefined) {
      roomUser[num] = [{ name, id: socket.id }];
    } else {
      roomUser[num].push({ name, id: socket.id });
    }
    io.to(room).emit("addToTab", roomUser, num);
  });

  socket.on("subTab", (num, name,room) => {
    roomUser[num] = roomUser[num].filter((a) => {
      return a.name != name;
    });
    io.to(room).emit('subTab',roomUser,num);
  });
});
