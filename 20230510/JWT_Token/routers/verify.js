const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const token = req.session.token;
  // 토큰이 유효한지 검증
  // verify 유효한 토큰인지 검증해주는 메서드
  // 첫번째 매개변수로 토큰을 전달하고
  // 두번째 매개변수로 key를 전달
  // 세번째 매개변수로 콜백함수 전달.
  // 콜백함수의 매개변수로 첫번째는 err내용 객체
  // 두번째는 해석된 객체
  const key = process.env.KEY;
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      console.log("썩은 토큰");
      res.send("토큰 썩었구나 or 변조되었구나");
    } else {
      console.log(decoded);
      res.send(decoded);
    }
  });
});
module.exports = router;
