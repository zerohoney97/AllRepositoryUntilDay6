const { User } = require("../models");
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
          if (data.dataValues.isAdmin) {
            res.redirect("/users/admin");
          } else {
            res.redirect("/post");
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
  changeAcceptTrue: async (req, res) => {
    const { id } = req.params;
    await User.update({ isAccept: true }, { where: { id } });
    res.redirect("/users/admin");
  },

  getGrade: async (req, res) => {
    const { decoded } = req;
    const data = await User.findOne({ where: { id: decoded.id } });
    return data.dataValues.grade_for_id;
  },
};

module.exports = userControllers;
