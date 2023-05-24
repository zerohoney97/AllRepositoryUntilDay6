const postControllers = require("../controllers/postsController");
const userControllers = require("../controllers/usersControllers");
const { isLogin } = require("../middleware/isLogin");
const { Post } = require("../models");

const router = require("express").Router();

router.get("/", isLogin, async (req, res) => {
  const data = await postControllers.getUserPost(req, res);
  const commentData = await postControllers.getUserComment(req, res);
  const nowLogin = await userControllers.getLoginUser(req, res);
  console.log(commentData)
  res.render("mypage", { data, commentData, nowLogin });
});

module.exports = router;
