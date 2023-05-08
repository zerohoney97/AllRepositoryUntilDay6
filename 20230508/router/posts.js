const e = require("express");

// 게시글의 라우터만 모아놓은 파일

// Router 메서드 라우팅을 관리할 수 있게 도와주는 메서드
// 라우터를 나눠서 관리 할 수 있다.
// 라우팅의 내용을 작성해놓고 app.use로 추가해서
const router = e.Router();

// 컨트롤러에 작성한 내용을 가져오자
const {
  ViewPostAll,
  Delete,
  Insert,
  SelectPost,
  Update,
} = require("../controllers/posts");

router.get("/", async (req, res) => {
  try {
    const data = await ViewPostAll(req, res);
    console.log('asd',data);
    res.render("main", { data: data });
  } catch (error) {
    console.log("게시글 리스트 화면 그리다 오류남");
  }
});
// 게시글 상세 페이지
router.get("/view/:id", async (req, res) => {
  try {
    const data = await SelectPost(req, res);
    console.log(data);
    res.render("detail", { data: data });
  } catch (error) {
    console.log("상세글 리스트 화면 그리다 오류남");
  }
});

router.get("/insert", (req, res) => {
  res.render("insert");
});

// 게시글 추가 요청이 들어오면
router.post("/insert", async (req, res) => {
  try {
    await Insert(req, res);
    res.redirect("/posts");
  } catch (error) {
    console.log("글 추가 에러 router/posts.js");
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const data = await SelectPost(req, res);
    res.render("edit", { data: data });
  } catch (error) {
    console.log("수정페이지 그리다 에러남");
  }
});

// 게시글 수정 버튼 눌러서 수정
router.post("/edit/:id", async (req, res) => {
  try {
    await Update(req, res);
    res.redirect("/posts");
  } catch (error) {
    console.log("게시글 수정하다 에러남. 프론트 router",error);
  }
});

router.get('/delete/:id',async (req,res)=>{
try {
  await Delete(req,res);
  res.redirect('/posts')
} catch (error) {
  console.log('라우터에서 삭제 에러')
}
})
module.exports = router;
