const router = require("express").Router();
const { isLogin, checkGrade } = require("../middleware/isLogin");
const {
  insert,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");
const { getAllComments } = require("../controllers/commentController");
const { getGrade } = require("../controllers/usersControllers");

router.get("/", isLogin, checkGrade, async (req, res) => {
  const data = await getAllPost(req, res);
  let newData = data.map((a) => {
    return a.dataValues;
  });

  res.render("post", { data: newData });
});

router.get("/insert", isLogin, (req, res) => {
  res.render("insert");
});

router.post("/insert", isLogin, insert);

router.get("/view/:id", isLogin, async (req, res) => {
  const data = await getPost(req, res);
  const commentData = await getAllComments(req, res);
  const grade_for_id = await getGrade(req, res);
  res.render("postDetail", { data, commentData,grade_for_id });
});

router.get("/update/:id", isLogin, async (req, res) => {
  const data = req.params.id;
  res.render("updatePost", { data });
});
router.post("/update/:id", isLogin, updatePost);

router.get("/del/:id", isLogin, deletePost);
module.exports = router;
