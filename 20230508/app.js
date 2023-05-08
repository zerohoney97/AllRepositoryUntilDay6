// 게시판을 만들었었는데
// MVC패턴으로 만들어보려고 합니다.
// 많이 사용하고 표준 기본적인 디자인 패턴
// 유지보수와 확장성을 고려해서 개발할 수 있다.
// 협업간의 코드의 표준화도 용이하다.

const e = require("express");

// mvc패턴은 model-view-controller

// model=> 데이터를 다루는 로직
// ex)글선택 글 작성 등등의 기능들... 어플리케이션의 동작을 관리하는 폴더

// view=> 사용자가 볼 수 있는 화면에 데이터를 표시 해주는 역할

// controller=> model과 view사이에서 동작을 제어해주는 역할
// model의 상태를 가지고 view에 반영 시켜주는 것

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다.

const app = e();
const PORT = 8080;
const path = require("path");
const postRoute = require("./router/posts");

app.listen(PORT, () => {
  console.log("서버 잘 열림~");
});

// Parse JSON request bodies
app.use(e.json());

// Parse URL-encoded request bodies
app.use(e.urlencoded({ extended: true }));

// 정적인 파일을 사용하기위해 미들웨어 추가
// 정적인 파일을 모아놀은 경로를 지정 public 폴더로 지정
// 앞에 매개변수로 경로를 지정하지 않을 경우에는 기본적으로 / 루트 경로로 지정한다.
// 그러므로 ejs파일에서는 /main.css해도 됨.
app.use(e.static(path.join(__dirname, "public")));

// postRoute객체에 get메서드로 . 루트 경로 지정했을때
// '/posts' 이 경로도 추가되어서 라우팅 된다.
//  /posts 붙어야 루트 경로로 요청이 된다.
// ex) list에 들어가고 싶음='/posts/list'
app.use("/posts", postRoute);

// view엔진으로 보여줄 파일들의 경로 설정
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
