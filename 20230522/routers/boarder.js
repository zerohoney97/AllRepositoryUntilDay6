const router = require("express").Router();

const { isLogin } = require("../middleware/login");

const {
  boarderMain,
  boarderView,
  createBoarder,
  updateBoarder,
  boarderDel,
} = require("../controllers/boarderController");

router.get("/", isLogin, boarderMain);

router.get("/view/:id", isLogin, boarderView);

router.post("/create_boarder", isLogin, createBoarder);

router.post("/view_update/:id", isLogin, updateBoarder);

router.get("/del/:id", isLogin, boarderDel);

module.exports = router;
