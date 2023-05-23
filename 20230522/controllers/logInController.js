const { User } = require("../models");
const bcrypt = require("bcrypt");
// npm i jsonwebtoken
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

exports.Login = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    const user = await User.findOne({ where: { user_id } });
    if (user == null) {
      return res.send("가입 안됐음");
    }
    const same = bcrypt.compareSync(user_pw, user.user_pw);
    if (same) {
      let token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          age: user.age,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn: "5m",
        }
      );
      req.session.access_token = token;
      res.redirect("/boarder");
    } else {
      res.send("비밀번호 틀림");
    }
  } catch (error) {
    console.log(error);
  }
};
