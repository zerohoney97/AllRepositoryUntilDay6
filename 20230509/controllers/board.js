const { boardFun } = require("../models/board");
const { controllUsers } = require("../controllers/users");


const controlBoards = {
  ViewAllBoard: async (req, res) => {
    try {
      const temp = await boardFun.viewAllBoard();
      return temp;
    } catch (error) {
      console.log("컨트롤러 보드", error);
    }
  },

  Insert: async (req, res) => {
    try {
      const { title, content } = req.body;
      const img = `/images/${req.file.filename}`;
      await boardFun.insert(title, content,img);
    } catch (error) {
      console.log("컨트롤러에 있는 삽입", error);
    }
  },
  SelectBoard: async (req, res) => {
    try {
      const tableId = req.params;
      const data = await boardFun.selectBoard(tableId);
      return data;
    } catch (error) {
      console.log("컨트롤러 보드에 있는 글 선택", error);
    }
  },
  UpdataBoard: async (req, res) => {
    try {
      const { title, content } = req.body;
      const tableId = req.params.id;
      await boardFun.updateBoard(title, content, tableId);
    } catch (error) {
      console.log("컨트롤러 보드 업데이트", error);
    }
  },
  DeleteBoard: async (req, res) => {
    try {
      const tableId = req.params.id;
      await boardFun.deleteBoard(tableId);
    } catch (error) {
      console.log("컨트롤러 보드 삭제", error);
    }
  },
  // 좋아요
  LikeBoard: async (req, res) => {
    try {
      const { id } = req.params;
      const nowLogin = await controllUsers.GetNowLogin(req, res);
      await boardFun.likeBoard(id, nowLogin);
    } catch (error) {
      console.log("컨트롤러 보드 좋아요", error);
    }
  },
  // 좋아요를 누른 유저의 아이디 가져옴
  GetLikeUserId: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await boardFun.getLikeUserId(id);
      return data;
    } catch (error) {
      console.log("컨트롤러 보드 좋아요", error);
    }
  },
  UploadImg: async (req, res) => {
    try {
      const { id } = req.params;
      const img = `/images/${req.file.filename}`;
      
      await boardFun.uploadImg(id, img);
    } catch (error) {
      console.log("컨트롤러의 보드", error);
    }
  },
};

module.exports = { controlBoards };
