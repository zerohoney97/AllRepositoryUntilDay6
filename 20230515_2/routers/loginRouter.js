const router = require("express").Router();
const { Login, verifyLogin } = require("../controllers/usersController");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", Login);

// 로그인 상태에서 요청해야하는 작업은
router.get("/mypage", verifyLogin, (req, res) => {
  // next함수를 실행시켜주면 다음 미들웨어로 이동
  res.send("로그인 상태고 마이 페이지 보여줄게");
});
module.exports = router;
