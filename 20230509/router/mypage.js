const e = require("express");
const mypageRouter = e.Router();
const { controlBoards } = require("../controllers/board");

mypageRouter.get("/", async (req, res) => {
  const data = await controlBoards.GetAllBaordsUser(req, res);
  console.log(data);
  res.render("mypage", { data: data });
});

module.exports = {mypageRouter};
