const e = require("express");
const multer = require("multer");
const path = require("path");
const boarRouter = e.Router();
const { mysql } = require("../models/connetToMysql");
const { controllUsers } = require("../controllers/users");
const { controlBoards } = require("../controllers/board");
const { controlComments } = require("../controllers/comment");
const { token } = require("./signIn");
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

// 이미지 보관의 경로와 이름
var stoage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: stoage });
boarRouter.get("/", async (req, res) => {
  const data = await controlBoards.ViewAllBoard();
  let token = req.session.token;
  let refreshToken = req.session.refreshToken;
  let KEY = process.env.KEY;
  jwt.verify(token, KEY, (err, decoded) => {
    if (err) {
      jwt.verify(refreshToken, KEY, (err, decoded) => {
        if (err) {
          console.log("refresh tojen is expired");
          res.send("다시 로그인 해 주세요");
        } else {
          let newToken = jwt.sign(
            {
              type: "JWT",
              name: token.name,
            },
            KEY,
            {
              expiresIn: "10s",
              issuer: "owner",
            }
          );
          console.log(decoded);

          req.session.token = newToken;
          console.log("토큰 재발급 완료");
          res.render("board", { data: data });
        }
      });
    } else {
      res.render("board", { data: data });
    }
  });
});

// 글 추가
boarRouter.get("/insert", (req, res) => {
  res.render("boardInsert");
});
boarRouter.post("/insert", upload.single("image"), async (req, res) => {
  await controlBoards.Insert(req, res);
  // await controlBoards.UploadImg(req, res);

  res.redirect("/board");
});

// 글 보기
boarRouter.get("/view/:id", async (req, res) => {
  const [[data]] = await controlBoards.SelectBoard(req, res);
  const [comment] = await controlComments.GetComments(req, res);
  const likeIdarray = await controlBoards.GetLikeUserId(req, res);
  const userId = await controllUsers.GetNowLogin(req, res);
  res.render("boardDetail", {
    data: data,
    commentData: comment,
    likeIdarray: likeIdarray,
    userId: userId,
  });
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
  console.log("좋아요 눌림");
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

// 이미지 업로드
boarRouter.post("/upload", upload.single("image"), async (req, res) => {});
module.exports = { boarRouter };
