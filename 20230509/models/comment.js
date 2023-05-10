const { mysql } = require("./connetToMysql");

// 본 코드는 board의 primary key를 초기화 하지 않는다는 가정하에 작성되었다.
const commentFun = {
  //  해당 게시글의 댓글 가져오기
  getComment: async (boardId) => {
    try {
      const data = await mysql.query("SELECT * FROM comment WHERE board_id=?", [
        boardId,
      ]);
      return data;
    } catch (error) {
      console.log("모델의 커멘트의 getComment", error);
    }
  },
  //   댓글 게시하기
  insertComment: async (content, nickName, userId, boardId) => {
    try {
      await mysql.query(
        "INSERT INTO comment (content,nickName,userId,board_id) VALUES(?,?,?,?)",
        [content, nickName, userId, boardId]
      );
    } catch (error) {
      console.log("모델의 커멘트의 insert", error);
    }
  },
};

module.exports = { commentFun };
