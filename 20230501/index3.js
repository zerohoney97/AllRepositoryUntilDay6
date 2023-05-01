// 내장 모듈 http,fs

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // createServer 메서드 서버 객체 만들고
  // 콜백함수의 매개변수로 req요청 내용을 가지고 있는 객체
  // res응답 내용을 가지고 있는 객체를 전달 받는다.

  // setHeader
  res.setHeader("Content-Type", "application/json", "charset=utf-8");

  const URL = req.url;
  // 요청한 url이 뭘까?

  // 요청한 url이 파비콘이면 그냥 무;
 
  if (URL == "/favicon/ico") {
    res.end();
    // 내용을 응답하고 종료하는 메소드
    // 응답을 안해주면 클라이언트는 요청을 하고 계속 기다림!
    return;
  }

  switch (URL) {
    case "/":
      fs.readFile("./20230501/views/main.html", (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end(err.code);
        } else {
            res.statusCode=200;
            // 전달하는 컨텐츠의 내용은 html 파일의 내용이야
            res.setHeader("Content-Type", "text/html", "charset=utf-8");
            res.end(data);
        }
      });
    //   res.end();
      break;
    case "/list":
        fs.readFile("./20230501/views/list.html", (err, data) => {
            if (err) {
              res.statusCode = 404;
              res.end(err.code);
            } else {
                res.statusCode=200;
                // 전달하는 컨텐츠의 내용은 html 파일의 내용이야
                res.setHeader("Content-Type", "text/html", "charset=utf-8");
                res.end(data);
            }
          });
    //   res.end();
      break;
    case "/add":
        fs.readFile("./20230501/views/add.html", (err, data) => {
            if (err) {
              res.statusCode = 404;
              res.end(err.code);
            } else {
                res.statusCode=200;
                // 전달하는 컨텐츠의 내용은 html 파일의 내용이야
                res.setHeader("Content-Type", "text/html", "charset=utf-8");
                res.end(data);
            }
          });
    //   res.end();
      break;

    default:
      break;
  }
});

server.listen(8080, () => {
  console.log("성공했구나 이녀석...");
});
