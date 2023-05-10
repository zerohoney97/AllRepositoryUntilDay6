const { mysql } = require("./connetToMysql");

// 본 코드는 board의 primary key를 초기화 하지 않는다는 가정하에 작성되었다.
const boardFun = {
  // 전체 글
  viewAllBoard: async () => {
    try {
      const [board] = await mysql.query("SELECT * FROM board");
      return board;
    } catch (error) {
      console.log("모델의 board", error);
    }
  },

  // 글 추가
  insert: async (title, content) => {
    try {
      
      const [[{userId}]] = await mysql.query("SELECT * FROM nowLogin");
      const [[{ nickName }]] = await mysql.query(
        "SELECT nickName FROM users WHERE id=?",
        [userId]
      );
      console.log(nickName, "models/board/insert");

      await mysql.query(
        "INSERT INTO board (title,content,userId,nickName) VALUES(?,?,?,?)",
        [title, content, userId, nickName]
      );
    } catch (error) {
      console.log("모델 보드에 삽입", error);
    }
  },
  //   선택한 글 보기,tableId는 테이블의 고유 번호이다.
  selectBoard: async (tableId) => {
    try {
      const data = await mysql.query("SELECT * FROM board WHERE id=?", [
        tableId.id,
      ]);
      return data;
    } catch (error) {
      console.log("모델 보드에 글 선택", error);
    }
  },

  updateBoard: async (title, content, tableId) => {
    try {
      await mysql.query("UPDATE board SET title=?,content=? WHERE id=?", [
        title,
        content,
        tableId,
      ]);
    } catch (error) {
      console.log("모델의 업데이트 보드");
    }
  },
  deleteBoard: async (tableId) => {
    try {
      await mysql.query(" DELETE FROM board WHERE id = ?", [tableId]);
    } catch (error) {
      console.log("모델의 보드의 삭제", error);
    }
  },
  // 글 좋아요
  likeBoard: async (tableId) => {
    try {
      const [[{ like }]] = await mysql.query("SELECT * FROM board WHERE id=?", [
        tableId,
      ]);
      if (like) {
        // 이미 좋아요가 1개이상일때
        await mysql.query("UPDATE board SET `like`=? WHERE id=?", [parseInt(like) + 1,tableId]);
      } else {
        // 좋아요가 처음일 때
        await mysql.query("UPDATE board SET `like`=?  WHERE id=?",[1,tableId]);
      }
    } catch (error) {
      console.log("모델의 보드의 좋아요", error);
    }
  },
};

module.exports = { boardFun };
