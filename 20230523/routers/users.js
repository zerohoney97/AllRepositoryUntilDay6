const router = require("express").Router();
const {
  signUp,
  login,
  getNotAccepctUsers,
  changeAcceptTrue,
  changeAcceptFalse,
  changeUserName,
  changeUserId,
} = require("../controllers/usersControllers");
const { isLogin } = require("../middleware/isLogin");

router.get("/signUp", (req, res) => {
  res.render("signUp");
});

router.get("/admin", isLogin, async (req, res) => {
  const data = await getNotAccepctUsers(req, res);
  res.render("admin", { data });
});

router.post("/accept/:id", changeAcceptTrue);
router.post("/denied/:id", changeAcceptFalse);

router.post("/signUp", signUp);

router.post("/update/username/:id",isLogin, changeUserName);
router.post("/update/userId/:id",isLogin, changeUserId);

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", login);

module.exports = router;
