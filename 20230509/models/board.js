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
  insert: async (title, content, img) => {
    try {
      const [[{ userId }]] = await mysql.query("SELECT * FROM nowLogin");
      const [[{ nickName }]] = await mysql.query(
        "SELECT nickName FROM users WHERE id=?",
        [userId]
      );

      await mysql.query(
        "INSERT INTO board (title,content,userId,nickName,img,foreUserId) VALUES(?,?,?,?,?,?)",
        [title, content, userId, nickName, img, userId]
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
  likeBoard: async (tableId, nowLogin) => {
    try {
      const [[{ like }]] = await mysql.query("SELECT * FROM board WHERE id=?", [
        tableId,
      ]);
      if (like) {
        // 이미 좋아요가 1개이상일때
        await mysql.query("UPDATE board SET `like`=? WHERE id=?", [
          parseInt(like) + 1,
          tableId,
        ]);
        const [[{ likeId }]] = await mysql.query(
          "SELECT likeId FROM board WHERE id=?",
          [tableId]
        );
        // 좋아요를 누른 유저의 아이디 저장
        const dataArr = JSON.parse(likeId);
        dataArr.push(nowLogin);
        const newDataArr = [...new Set(dataArr)];
        const jsonNewDataArr = JSON.stringify(newDataArr);
        await mysql.query("UPDATE board SET likeId=? WHERE id=?", [
          jsonNewDataArr,
          tableId,
        ]);
      } else {
        // 좋아요가 처음일 때
        await mysql.query("UPDATE board SET `like`=?  WHERE id=?", [
          1,
          tableId,
        ]);
        const array = [nowLogin];
        const inputArrayData = JSON.stringify(array);
        // 좋아요를 처음 누른 유저를 저장
        await mysql.query("UPDATE board SET likeId=? WHERE id=?", [
          inputArrayData,
          tableId,
        ]);
      }
      // 좋아요 누른 유저의 아이디 저장
    } catch (error) {
      console.log("모델의 보드의 좋아요", error);
    }
  },
  //좋아요 누른 유저 아이디 가져오기
  getLikeUserId: async (tableId) => {
    try {
      const [[{ likeId }]] = await mysql.query(
        "SELECT likeId FROM board WHERE id=?",
        [tableId]
      );
      const data = JSON.parse(likeId);
      return data;
    } catch (error) {
      console.log("모델의 보드의 좋아요가져오는 함수", error);
    }
  },
  // 이미지 업로드
  uploadImg: async (id, img) => {
    try {
      const boardId = mysql.query("SELECT id ");
      const sql = "INSERT INTO image(image,boardId) VALUES(?,?)";
      await mysql.query(sql, [img, id], (err) => {
        if (err) {
          console.log(err);
        }
      });
    } catch (error) {}
  },
  // 해당 유저의 모든 글 보기
  getAllboardUser: async (userId) => {
    try {
      const sql =
        "SELECT board.id,board.title,board.content,board.like,board.likeId,board.img FROM board INNER JOIN users ON users.id=board.foreUserId WHERE users.id=?";
      const [boardList] = await mysql.query(sql, [userId]);
      return boardList;
    } catch (error) {
      console.log("getAllboardUser in model board", error);
    }
  },
};

module.exports = { boardFun };
