// 로그인 페이지
// 복습
// 폴더를 나눠서
// 배포를 해서 프론트를 수정하면 프론트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

const e = require("express");

// 프로젝트 관리
// 백엔드랑 프론트랑 나눠서 깃 레파지토리 파놓고 푸쉬

// express express-session cors
// 프로젝트 시작

const app=e();

app.listen(8080,()=>{
    console.log('gogo')
})