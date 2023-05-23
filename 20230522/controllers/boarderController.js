const { User, Post } = require("../models");

exports.boarderMain = async (req, res) => {
  // 해당 유저의 마이 페이지
  const { decoded } = req;
  const user = await User.findOne({ where: { name: decoded.name } });
  res.render("main", { data: user });
};

exports.createBoarder = async (req, res) => {
  
  const { decoded } = req;
  const { user_post } = req.body;
  // post table에 글 추가
  await Post.create({
    msg: user_post,
    user_id: decoded.id,
  });
  // 해당 유저가 작성한 글들을 볼 수 있는 페이지로 이동
  res.redirect(`/boarder/view/${decoded.id}`);
};

exports.boarderView = (req, res) => {
  User.findOne({
    where: {id:req.params.id},
    include: [{ model: Post }],
  }).then((e) => {
    e.dataValues.Posts = e.dataValues.Posts.map((a) => {
      return a.dataValues;
    });
    const Posts = e.dataValues;
    console.log(Posts,'asdasd');
    res.render("boarder", { data: Posts });
  });
};

exports.updateBoarder = async (req, res) => {
  const { decoded } = req;
  const { msg } = req.body;
  const { id } = req.params;
  // 수정메서드 사용
  // update 메서드 Update set 사용하던 것처럼..
  // 첫번째 매개변수는 객체로 수정할 값
  // 두번째 매개변수는 객체로 조건 수정할 내용을 찾아서
  await Post.update({ msg }, { where: { id } });
  res.redirect(`/boarder/view/${decoded.id}`);
};

exports.boarderDel = async (req, res) => {
  // 삭제 메서드 사용
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect("/boarder");
};
