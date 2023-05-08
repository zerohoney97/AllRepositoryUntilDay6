const { title } = require("process");
const { mysql } = require("./config.js");

// 글의 내용 작성
// 수정 추가 삭제
// 게시판의 기능들이 작성될 공간
const posts = {
  initTable: async function () {
    // 서버 종료 안되게 try,catch 쓰는것 중요
    try {
      // spread 연산자로 배열의 첫번째는 담음
      const [result] = await mysql.query("SELECT * FROM posts");
    } catch (err) {
      console.log(err);
      await mysql.query(
        "CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(20),CONTENT VARCHAR(100))"
      );
    }
  },
  //   글의 리스트를 조회하는 함수
  viewPostAll: async function () {
    try {
      const [result] = await mysql.query("SELECT * FROM posts");
      //   posts 테이블의 데이터 전부 조회
    return result;
    } catch (err) {
      console.log(err);
    }
  },
  //   글 선택시 글 하나를 보여줄 함수
  //   async await 를 사용하던지 then을 사용하던지 둘 중 하나만
  selectPost: async function (id) {
    try {
      const [[result]] = await mysql.query("SELECT * FROM posts WHERE id=?", [
        id,
      ]);

      console.log("선택한 게시글:", result);
      return result
    } catch (err) {
      console.log("글 선택", err);
    }
  },
  //  글을 추가 해주는 메서드
  insert: async function (title, content) {
    try {
      await mysql.query("INSERT INTO posts (title,content) VALUES(?,?)", [
        title,
        content,
      ]);
      console.log("글 추가 완료");
    } catch (err) {
      console.log("글 추가 에러남");
    }
  },
  //   글을 수정하는 메소드
  update: async function (id, title, content) {
    try {
      await mysql.query("UPDATE posts SET title=?,CONTENT=? WHERE id=?", [
        title,
        content,
        id,
      ]);
    } catch (err) {
      console.log("글 업데이트 에러남");
    }
  },
  delete: async function (id) {
    try {
      await mysql.query(
        "DELETE FROM posts WHERE id=? ;SET @CNT=0; UPDATE posts SET posts.id=@CNT:=@CNT+1;ALTER TABLE posts AUTO_INCREMENT=0;",
        [id]
      );
      console.log(`${id}번 게시글 삭제 완료`);
    } catch (err) {
      console.log("게시글 삭제", err);
    }
  },
};
// posts.insert('추가2','추가 컨텐츠2')
// posts.update(1, "수정된", "글");
// posts.selectPost(1);
// posts.delete(2);

module.exports = posts;
