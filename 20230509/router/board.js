const e = require("express");
const boarRouter = e.Router();
const { mysql } = require("../models/connetToMysql");
const { controllUsers } = require("../controllers/users");
const { controlBoards } = require("../controllers/board");
const { controlComments } = require("../controllers/comment");

boarRouter.get("/", async (req, res) => {
  const data = await controlBoards.ViewAllBoard();
  res.render("board", { data: data });
});

// 글 추가
boarRouter.get("/insert", (req, res) => {
  res.render("boardInsert");
});
boarRouter.post("/insert", async (req, res) => {
  
  await controlBoards.Insert(req, res);
  res.redirect("/board");
});

// 글 보기
boarRouter.get("/view/:id", async (req, res) => {
  const [[data]] = await controlBoards.SelectBoard(req, res);
  const [comment] = await controlComments.GetComments(req, res);
  console.log([comment]);
  res.render("boardDetail", { data: data, commentData: comment });
});

// 글 수정
boarRouter.get("/edit/:id", async (req, res) => {
  const [[data]] = await controlBoards.SelectBoard(req, res);
  const [[{ userId }]] = await mysql.query(
    "SELECT userId FROM board WHERE id=?",
    [req.params.id]
  );
  const userIdWhoNow = await controllUsers.GetNowLogin(req, res);

  if (userIdWhoNow != userId) {
    res.render("error");
  } else {
    res.render("boardEdit", { data: data });
  }
});
// 글 수정
boarRouter.post("/edit/:id", async (req, res) => {
  await controlBoards.UpdataBoard(req, res);
  res.redirect("/board");
});

// 댓글 달기
boarRouter.post("/comment/:id", async (req, res) => {
  await controlComments.InsertComment(req, res);
  res.redirect(`/board/view/${req.params.id}`);
});
// 글 좋아요
boarRouter.post("/like/:id", async (req, res) => {
  await controlBoards.LikeBoard(req, res);

  res.redirect(`/board/view/${req.params.id}`);
});
// 글 삭제
boarRouter.get("/delete/:id", async (req, res) => {
  const [[{ userId }]] = await mysql.query(
    "SELECT userId FROM board WHERE id=?",
    [req.params.id]
  );
  const userIdWhoNow = await controllUsers.GetNowLogin(req, res);

  if (userIdWhoNow != userId) {
    res.render("error");
  } else {
    await controlBoards.DeleteBoard(req, res);
    res.redirect("/board");
  }
});
module.exports = { boarRouter };
