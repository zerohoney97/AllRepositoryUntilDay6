const { Comment } = require("../models");
const { Post } = require("../models");

const commentControllers = {
  insert: async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const { username } = req.decoded;

      await Comment.create({
        writer: username,
        content,
        post_for_id: id,
      });
      res.redirect(`/post/view/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  getAllComments: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Post.findOne({
        where: { id },
        include: [{ model: Comment }],
      });
      data.Comments = data.Comments.map((a) => {
        return a.dataValues;
      });
      return data.Comments;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = commentControllers;
