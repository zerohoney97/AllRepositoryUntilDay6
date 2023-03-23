//쿠키 세션 로컬 스토리지

// 쿠키

function createCookie(name, value) {
  // 현재 날짜와 시간 정보를가지고 있는 객체만들고
  let date = new Date();
  // 10초 이후의 시간걊을 객체에 넣고
  //
  date.setTime(date.getTime() + 10000);
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + "path=/";
}
// createCookie("팝업", true);


// 세션
// 사용자가 브라우저를 이용하는데 하나의 상태를 관리할 때
// 로그인 서버쫏에서 세션 id를 생성하고 프론트에서 세션의 id를 서버레서 받아서 사용
// 로그인 유지를 시키기 위해서 세션id를 사용해서 로그인이 유효한지 상태를 유지시키는 개념
// 로그인 상태가 맞는지 확인

//브라주거ㅏ 종료될때 까지 유지된다.

// 프론트에서 만들어보자.

//setItem 메소드: 첫 매개변수 키 두번째 매개변수 값
sessionStorage.setItem('Token','데이터 내용');//값을 저장
// 세션의 저장된 데이터를 호출
// getItem:세션에 저장된 데이터를 호출 매개변수로는 키값을 전달.

let temp=sessionStorage.getItem('Token');
console.log(temp)

// // 문서에 내용을 쓰기 추가할 수 있다.
// document.write(temp);

// // 세션의 길이 구하는 법
// // length길이
// document.write(sessionStorage.length);

// // 세션의 키값을 인덱스로 호출
// // key라는 메소드
// document.write(sessionStorage.key(0))

// 세션삭제
// clear:세션 전체 삭제
sessionStorage.clear();

// 로컬 스토리지 했는데
window.localStorage.setItem('fistLocalKey','강림');

// 로컬 스토리지 값을 호출
window.localStorage.getItem('firstLocalKey')

// 로컬스토리지 값을 제거
// window.localStorage.clear();

// 로컬 스토리지 길이
console.log(window.localStorage.length);

// 로컬 스토리지 키값 호출
window.localStorage.key(0)
