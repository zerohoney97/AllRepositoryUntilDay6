const { boardFun } = require("../models/board");
// 현재 로그인한 유저
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
      await boardFun.insert(title, content);
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
  LikeBoard:async (req,res)=>{
    try {
      const {id}=req.params
      await boardFun.likeBoard(id);
    } catch (error) {
      console.log("컨트롤러 보드 좋아요", error);
      
    }
  }
};

module.exports = { controlBoards };
