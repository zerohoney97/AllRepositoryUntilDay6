const {
  userInsert,
  userList,
  userSelect,
  userDelete,
  userPasswordUpdate,
  userRefresh,
} = require("../models");
const jwt = require("jsonwebtoken");
const { session } = require("express-session");
exports.UserList = async () => {
  try {
    const data = await userList();
    return data;
  } catch (error) {
    console.log("UserList in userController ", error);
  }
};

// 회원가입
exports.SignUp = async (req, res) => {
  const { user_id, user_password } = req.body;
  try {
    await userInsert(user_id, user_password);
    res.redirect("/login");
  } catch (error) {
    console.log("SignUp in userController", error);
  }
};

// 로그인
exports.Login = async (req, res) => {
  const { user_id, user_password } = req.body;
  try {
    const data = await userSelect(user_id);
    // 유저 조회가 되었다면, option chaning
    if (!data?.user_id) {
      return res.send("id없음");
    }
    if (data.user_pw !== user_password) {
      return res.send("비밀번호 틀림");
    }

    // 여기까지 통과하면 로그인 성공
    // access token 발급
    const accessToken = jwt.sign(
      {
        user_id: data.user_id,
        mail: "dddd",
        nick: "zero",
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "5s",
      }
    );
    // refresh token 발급
    const refreshToken = jwt.sign(
      {
        user_id: data.user_id,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: "50s",
      }
    );
    await userRefresh(user_id, refreshToken);
    req.session.access_token = accessToken;
    req.session.refresh_token = refreshToken;
    res.send({ access_token: accessToken, refresh_token: refreshToken });
  } catch (error) {
    console.log("login in userController", error);
  }
};

// 유저 토큰 검증
exports.verifyLogin = async (req, res, next) => {
  const { access_token, refresh_token } = req.session;
  jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_KEY,
        async (err, ref_decoded) => {
          if (err) {
            res.send("다시 로그인 하세요");
            console.log(err);
          } else {
            const data = await userSelect(ref_decoded.user_id);
            if (data.refresh == refresh_token) {
              const accessToken = jwt.sign(
                {
                  user_id: ref_decoded.user_id,
                },
                process.env.ACCESS_TOKEN_KEY,
                {
                  expiresIn: "5s",
                }
              );
              console.log(req.session.access_token, "변신이다.");
              console.log(accessToken);

              req.session.access_token = accessToken;
              console.log("access_token재발급");
              next();
            } else {
              res.send("중복 로그인 방지");
            }
          }
        }
      );
    } else {
      console.log("로그인 정상 유지중");
      // 이걸 쓰면 다음 미들웨어(즉, router에 있는 router.get())로 넘어간다.
      next();
    }
  });
};

