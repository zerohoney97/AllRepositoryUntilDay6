const { commentFun } = require("../models/comment");
const { controllUsers } = require("../controllers/users");
// 현재 로그인한 유저
const controlComments = {
  // 해당 게시글을 가져오는 함수
  GetComments: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await commentFun.getComment(id);
      return data;
    } catch (error) {
      console.log("컨트롤러의 커멘트 get", error);
    }
  },
  //   댓글 게시하는 함수
  InsertComment: async (req, res) => {
    const { comment } = req.body;
    // 현재 로그인한 유저의 id갖고옴
    const nowLogin = await controllUsers.GetNowLogin();
    //그 id를 기반으로 해당하는 유저를 찾음
    const user = await controllUsers.GetUser(nowLogin);
    await commentFun.insertComment(
      comment,
      user.nickname,
      user.id,
      req.params.id
    );
  },
};

module.exports = { controlComments };
