// 입장 토큰만 만들어서 로그인 검증했는데
// 엑세스 토큰만 사용한 방식

const e = require("express");
const path = require("path");
const dot = require("dotenv").config();
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");

// 1.이용자가 로그인 시도를 하고
// 2.서버에서 이용자를 확인하고 입장권을 발급해주고
// JWT 토큰 인증정보를 payload에 할당하고 생성
// 3.생성한 토큰을 클라이언트에 반환해주고 클라이언트는 이 입장권을 가지고 있는다.
// 4.클라이언트가 서버에 요청을 할 때 이 입장권도 같이 보내서 요청을 시도한다.
// 5.서버는 요청을 받아서 그 입정권이 유효한지 확인하고 유효한 입장권이면 요청을 처리하고
//   요청에 대한 응답을 해준다.
// 6.입장권이 정상적인지 확인하고 썩었는지 변조가 되었는지 (변조가 되었고 썩었으면 다시 재로그인 시킨다.)
//   (입장권 새로 산다.)

// refresh token을 같이 사용하면
// Access token만 사용하면 인증 보안이 취약할 수 있어서 다른사람이 Access token을 탈취했을 때
// 토큰의 유효기간이 끝날 때 까지는 막을수가 없다... 그래서 유효기간을 짧게 주고 짧게 주면
// 로그인을 계속해야하는 번거로움이 생기고(사용자가 이용하기 힘들다.) Refresh token의 유효기간을 길게 주고
// Access token의 유효기간을 짧게 주어서 너무 어려운 개념은 아니고... 토큰 두개 씀.
// Refresh token은 유효기간을 길게 주고 Access token이 유효기간이 끝났을 때 밟급해주는 역할만 하면 된다.

// Access token과 refresh token을 같이 사용한 인증 방식
// 1.클라이언트가 로그인
// 2.서버에서 사용자를 확인하고 입장권 권한 인증 정보를 payload에 할당하고 생성
// 3.Refresh token을 만들어서 데이터베이스에 저장해두고 2개의 토큰 전부 클라이언트에 전달해준다.
// 4.클라이언트도 두 토큰을 가지고 있고
// 5.클라이언트가 요청을 할 때 Access token을 전달해서 요청한다.
// 6.서버는 전달받은 토큰을 확인하고 decoding해서 Access token을 디코드 해서 사용자 정보를 확인하고
// 7.토큰이 정상적인지 확인(썩은 토큰인지 아닌지)
// 8.변조된 토큰이면 새로 로그인 시킬 수 있게 한다.
// 9.만약에 날짜가 지난 토큰이면 refresh token으로 다시 재발급 해준다.

// 쉽게 말해서 엑세스 토큰은 우리가 사용하는 그대로이고 refresh token만 추가되었는데 Access token의 발급 용도로만 알고있자.
const app = e();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(e.json());
app.use(e.urlencoded({ extended: false }));
app.use(cookie());

// 더미로 회원가입 한 사람의 정보 객체
const user = {
  id: "mumu",
  password: "123",
};

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // 요청 객체의 body에 user_id랑 user_pw
  const { user_id, user_password } = req.body;
  if (user_id === user.id && user_password === user.password) {
    // access token 발급
    const accessToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: "1d",
      }
    );
    // 쿠키생성
    res.cookie("refresh", refreshToken, { maxAge: 24 * 60 * 60 * 1000 });
    res.render("join", { data: accessToken });
  }
});

app.post("/refresh", (req, res) => {
  // 옵션체이닝 뒤에 오는 키값이 있는지 먼저 확인하고 값을 호출해서 반환
  // 그래서 크래쉬 방지
  console.log(req.cookies);
  if (req.cookies?.refresh) {
    const refreshToken = req.cookies.refresh;
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, decoded) => {
      // err가 있으면 다시 로그인
      if (err) {
        res.send("다시 로그인");
      } else {
        const accessToken = jwt.sign(
          {
            id: user.id,
          },
          process.env.ACCESS_TOKEN_KEY,
          {
            expiresIn: "20s",
          }
        );
        res.render("join", { data: accessToken });
      }
    });
  } else {
    res.send("로그인 ㄱㄱ");
  }
});

app.listen(8080, () => {
  console.log("성공했구나 이녀석...");
});
