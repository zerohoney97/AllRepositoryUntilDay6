// fs 모듈: 파일 시스템 파일 생성, 삭제 읽기 쓰기 등 작업을 할 수 있다.
const fs = require("fs");

// 폴더가 있는지 확인을 하는 메서드
// existsSync:메서드 폴더가 있는 지 확인을 해주는 메서드. 반환값이 boolean
// 동기적으로 작동합니다. sync 구분이 있는 메서드는 동기적으로 동작한다.
// 매개변수 폴더의 경로를 작성해준다.
let folder = fs.existsSync("./20230501/test");
console.log(folder);

// 폴더를 생성해보자
// mkdirSync 메서드: 폴더생성
// 첫번째 매개변수는 생성할 폴더의 경로
// 두번째 매개변수로 폴더 생성시 호출할 콜백 함수
// 콜백함수 첫번째 매개변수로 에러의 내용의 객체를 전달 받는다.
if (!folder) {
  fs.mkdir("./20230501/test", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("폴더생성");
    }
  });
  //   fs.mkdirSync("./20230501/test");
  //   console.log("폴더 On");
}

// 폴더를 만들었고 폴더안에 파일을 추가해보자
// writeFile:파일 쓰기 파일에 데이터를 작성 할 수 있다.
// 첫번째 매개변수 파일의 이름 경로
// 두번째 매개변수 파일에 작성할 내용
// 세번째 매개변수 콜백 함수
// 콜백함수의 매개변수는 에러내용의 객체를 전달 받는다.
// sync없으니까 비동기
fs.writeFile("./20230501/test/text.txt", "Hello nodejs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("파일 생성 완료");
  }
});

//폴더도 만들고 파일도 만들고 파일의 내용도 작성해 봤으니까

// 파일을 읽어와 보자
// readFile:파일을 읽어온다.
// 첫번째 매개변수로 파일의 경로
// 두번째 매개변수로 인코딩의 내용
// 인코딩 내용을 작성을 안한면 null로 들어간다!
// 이렇게 되면 buffer객체로 읽어온다.
// 세번째 매개변수 콜백함수
// 콜백함수의 첫번째 매개변수는 에러의 내용 객체
// 두번째 매개변수는 읽어온 파일의 내용
// 마찬가지로 비동기
fs.readFile("./20230501/test/text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 동기는? return갓이 data
let readFileData = fs.readFileSync("./20230501/test/text.txt", "utf-8");
// 여기에 동작이 끝날 때 까지 기다린다.
console.log(readFileData);

// 폴더 제거 해보자
// rm 메서드:폴더 삭제
// 첫번 째 매개변수:삭제할 폴더의 경로
// 두번 째 매개변수로 옵션 객체를 전달하는데{recursive:true}
// recursive 키의 값에 따라 true나 false를 폴더안에 내용이 있는지 폴더안의 내용까지
// 제거할 것인지.
// 세번째 매개변수로 콜백함수
// 콜백함수는 매개변수로 에러내용의 객체를 전달 받는다.

// fs.rm('./20230501/test',{recursive:true},(err)=>{
// if (err) {
//     console.log(err)

// }else{
//     console.log('폴더 컷')
// }
// })
