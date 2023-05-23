const jwt = require("jsonwebtoken");

exports.isLogin = async (req, res, next) => {
  const { access_token } = req.session;
  jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      res.send("다시 로그인 ㄱ");
    } else {
      // decoded 키를 추가해서 값을 전달
      req.decoded = decoded;
      // 토큰이 유효한 동안 로그인이 되어있는 것이고,
      // 유저의 필요한 정보도 payload값에 있기 때문에 복호화돼서 사용 가능
      //   다음 미들 웨어 실행
      next();
    }
  });
};
