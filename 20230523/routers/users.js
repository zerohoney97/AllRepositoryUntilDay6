const router = require("express").Router();
const {
  signUp,
  login,
  getNotAccepctUsers,
  changeAcceptTrue,
} = require("../controllers/usersControllers");
const { isLogin } = require("../middleware/isLogin");

router.get("/signUp", (req, res) => {
  res.render("signUp");
});

router.get("/admin", isLogin, async (req, res) => {
  const data = await getNotAccepctUsers(req, res);
  console.log(data);
  res.render("admin", { data });
});

router.post("/accept/:id", changeAcceptTrue);

router.post("/signUp", signUp);

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", login);

module.exports = router;
