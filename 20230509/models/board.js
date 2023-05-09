const { mysql } = require("./connetToMysql");

// 본 코드는 board의 primary key를 초기화 하지 않는다는 가정하에 작성되었다.
const boardFun = {
  // 글 추가
  insert: async (title, content, userId) => {
    try {
      await mysql.query(
        "INSERT INTO board (title,content,userId) VALUES(?,?,?)",
        [title, content, userId]
      );
    } catch (error) {
      console.log("모델 보드에 삽입", error);
    }
  },
  //   선택한 글 보기,tableId는 테이블의 고유 번호이다.
  selectBoard: async (tableId) => {
    try {
      const data = await mysql.query("SELECT * FROM board WHERE id=?", [
        tableId,
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
};
