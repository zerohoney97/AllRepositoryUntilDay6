const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
const { User, Post } = require("../models");

module.exports.isLogin = async (req, res, next) => {
  const { token } = req.session;
  jwt.verify(token, process.env.KEY, (err, decoded) => {
    if (err) {
      res.send("다시 로그인 해주세요");
    } else {
      req.decoded = decoded;
      console.log(req.decoded);
      next();
    }
  });
};

module.exports.checkGrade = async (req, res, next) => {
  const { decoded } = req;
  const data = await User.findOne({
    where: { id: decoded.id },
    include: [{ model: Post }],
  });
console.log(data,'asdasdasdsad');
const newData = data.dataValues.Posts.map((a) => {
    return a.dataValues;
  });

  if (newData.length > 2) {
    await User.update({ grade_for_id: 2 }, { where: { id: decoded.id } });
  }
  next();
};
