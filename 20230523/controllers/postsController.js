const { Post, User ,Comment} = require("../models");

const postControllers = {
  insert: async (req, res) => {
    try {
      const { title, content } = req.body;
      await Post.create({
        title,
        content,
        writer: req.decoded.username,
        user_for_id: req.decoded.id,
      });
      res.redirect("/post");
    } catch (error) {
      console.log(error);
    }
  },
  getAllPost: async (req, res) => {
    try {
      const data = await Post.findAll();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPost: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Post.findOne({ where: { id } });
      return data.dataValues;
    } catch (error) {
      console.log(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      await Post.update(
        {
          title,
          content,
        },
        { where: { id } }
      );
      res.redirect(`/post/view/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.redirect("/post");
  },
  // 특정 유저가 작성한 글
  getUserPost: async (req, res) => {
    const { decoded } = req;
    const data = await User.findOne({
      where: { id: decoded.id },
      include: [{ model: Post }],
    });
    const newData = data.Posts.map((a) => {
      return a.dataValues;
    });
    return newData;
  },
  // 특정 유저가 작성한 댓글
  getUserComment: async (req, res) => {
    const { decoded } = req;
    const data = await Comment.findAll({
      where: { writer: decoded.username },
    });

    const newData = data.map((a) => {
      return a.dataValues;
    });
    return newData;
  },
};

module.exports = postControllers;
