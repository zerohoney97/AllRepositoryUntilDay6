// nodejs의 내장 모듈
// nodejs에서 미리 만들어 놓은 모듈을 내장 모듈이라고 해요.
// require에서 모듈경로와 파일명을 적는게 아니라
// 모듈의 이름만 필요

// 운영체제

const os = require("os");

console.log(os);

//nodejs의 내장 객체
// node의 전역객체에는 global 객체 우리가 js에서 보던 window 처럼
// 전역 객체가 있어요
// 런타임 환경이 다르기 때문에 전역 객체도 다르다.

// 자바스크립트에 this를 작성하면 module.exports가 나옴
// 참조가 들어가기 때문에 다르지 않을까?

// nodejs의 모듈의 실행 컨텍스트와 전역 컨텍스트가 다르기 때문에
// nodejs에서는 모듈은 각각의 파일 스코프를 가지고 있기 때문에 this는 모듈 자체를 가리킨다.

// 레포모드 키고

global.console.log();
global.console.time(); //코드 시작 시간 매개변수로 해당 테스트 이름을 문자열 작성
global.console.timeEnd(); //코드 종료후 시간 출력

// 전달된 객체를 표형태로 보여주는 메소드
// global.console.table({a: { name: "이무헌" },b: { name: "이무헌2" },c: { name: "이무헌3" },});

// 실행시키면 실행한 파일의 이름까지 보여줌
console.log(__filename);
// 실행한 파일의 directory까지 보여줌
console.log(__dirname);

// 나중에 필요할 때가 생기니 잘 알아둘것~

// process 객체
process.env
// console.log(process.env);
console.log(process.version) //노드의 설치 버전
console.log(process.execPath); //노드의 경로
console.log(process.cpuUsage()); //cpu 사용량