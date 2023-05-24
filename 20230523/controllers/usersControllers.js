const { User, Comment } = require("../models");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
const bcrypt = require("bcrypt");

const userControllers = {
  signUp: async (req, res) => {
    try {
      const { username, user_id, user_pw } = req.body;
      const data = await User.findOne({ where: { user_id } });
      if (data) {
        return res.send("이미 가입한 유저입니다");
      } else {
        const hash = bcrypt.hashSync(user_pw, 10);
        User.create({
          username,
          user_id,
          user_pw: hash,
          isAdmin: false,
          isAccept: false,
          grade_for_id: 1,
        });
        res.redirect("/users/login");
      }
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const { user_id, user_pw } = req.body;

      const data = await User.findOne({ where: { user_id } });
      if (data) {
        const same = bcrypt.compareSync(user_pw, data.user_pw);
        if (same) {
          let token = jwt.sign(
            {
              type: "jwt",
              id: data.dataValues.id,
              user_id,
              username: data.dataValues.username,
            },
            process.env.KEY,
            {
              expiresIn: "10m",
            }
          );
          req.session.token = token;
          // 운영자 확인
          if (data.dataValues.isAdmin) {
            res.redirect("/users/admin");
          } else {
            // 수락됐는지 확인
            if (data.dataValues.isAccept) {
              // 거절됐는지 확인
              if (
                data.dataValues.username == `notallowed!@#${data.dataValues.id}`
              ) {
                res.send("거절한다.-운영자");
              } else {
                res.redirect("/post");
              }
            } else {
              res.send("너는 못 지나간다-운영자");
            }
          }
        } else {
          return res.send("비밀번호가 잘 못 되었습니다.");
        }
      } else {
        return res.send("가입한 유저가 아닙니다.");
      }
    } catch (error) {
      console.log(error);
    }
  },

  getNotAccepctUsers: async (req, res) => {
    const data = await User.findAll({ where: { isAccept: false } });
    const newData = data.map((a) => {
      return a.dataValues;
    });
    return newData;
  },
  // 유저 허락
  changeAcceptTrue: async (req, res) => {
    const { id } = req.params;
    await User.update({ isAccept: true }, { where: { id } });
    res.redirect("/users/admin");
  },
  // 유저 거절
  changeAcceptFalse: async (req, res) => {
    const { id } = req.params;
    await User.update(
      { username: `notallowed!@#${id}`, isAccept: true },
      { where: { id } }
    );
    res.redirect("/users/admin");
  },
  changeUserName: async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    console.log(req.decoded);
    await User.update({ username: username }, { where: { id } });
    await Comment.update(
      { writer: username },
      { where: { writer: req.decoded.username } }
    );
    res.redirect("/users/login");
  },
  changeUserId: async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;

    await User.update({ user_id }, { where: { id } });
    res.redirect("/users/login");
  },
  getGrade: async (req, res) => {
    const { decoded } = req;
    const data = await User.findOne({ where: { id: decoded.id } });
    return data.dataValues.grade_for_id;
  },
  getLoginUser: async (req, res) => {
    return req.decoded;
  },
};

module.exports = userControllers;
