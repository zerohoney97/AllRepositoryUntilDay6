// [쿠키, 세션, 로컬스토리지]

// [쿠키] : 해당 PC에 남아있다 / 웹사이트를 방문하고 사용자의 Pc에 기록할 간단한 데이터
// pc 에 저장해두었다가 값을 호출해서 사용할수있다
// 브라우저가 종료되어도 남아있다

// document 객체 안에 있다
// console.log(document.cookie);
// [쿠키 구조] : 키와 값이 있다 / 문자열로 저장된다
// name : 쿠키의 이름 (키)
// value : 값
// time : 유효시간
function createCookie(name, value, time) {
  // 처음 필요한것 : 쿠키의 지속시간 (유효기간 빠지면 못먹음!)
  // 시간과 날짜 년도 정보를 제공해주는 객체를 만들수가 있다 -> 생성자로 구현이 가능하다 -> new로
  // date

  // 지금 시간에 정보를 가지고 있는 객체를 만들어준다
  let date = new Date(); // js에 내장된 date생성자를 사용하여 date 에 할당해줌
  console.log(date);

  // getTime : 현재시간
  console.log(date.getTime());
  // 지금시간에서 + 얼마나 쿠키를 유지할지 추가해줄거임

  // time 을 _time 으로 설정해서 불 안들어오는거임
  // 하루 뒤에 제거해줄거임
  let _time = 1;
  console.log(date.getTime() + 10000); // 1초 * 60 -> 1분 * 60 -> 1시간 *24 -> 24시간

  // // [set 과 get]
  // // set : 변경할때 네이밍으로 많이 사용한다
  // // get : 정보를 호출할때
  // // 객체를 만들어서 정보를 가져오는 경우 메소드는 get을 쓰고
  // // setTime 메소드

  // // 하루 이후 시간
  date.setTime(date.getTime() + 10000);

  // // 쿠키를 추가하는 방법
  // // 기본규격 : 쿠키의 명=값;expires= + 만료일 + ";path=/"
  // // path=/ : 페이지의 경로에 대한 설정 쿠키를 다루는 경로
  // // toUTCString 메소드 : 날짜, 시간, 표시방법을 변경해준다.
  console.log(date.toUTCString());
  document.cookie =
    name + "=" + value + ";expires" + date.toUTCString() + "path=/";
}
//   createCookie("팝업","true","");
// createCookie("팝업","두번째 쿠키","");
// console.log(document.cookie);
// [세션] : 브라우저가 동작되는 동안에 남아있는 데이터
// 상태같은 내용을 다룰때 사용한다 ex) 로그인이 되어있는 상태
// 브라우저가 종료되면 없어진다

function getCookie() {
  let value = document.cookie.split("=");
  // = 제거하고 배열로 변경
  console.log(document.cookie);
  return [1];
}
getCookie(getCookie());

// 쿠키함수를 작성해보자
// 정규식이 포함되기는 하는데 지금은 무시해도 된다
// 다들 정규식은 간단한것만 사용하고 필요한 내용이 생기면 찾고하면 편해서
// 찾아서 작성하는 경우가 많아
function getCookie2(name) {
  // match 메소드
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  console.log(value);
  return value ? value[2] : null;
}

// // 쿠키를 제거 하는 함수 (쿠키를 상하게만 하면 된다 . 날짜를 지나게)
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu. 01 Jan 1999 00:00:10 GMT,";
}


// deleteCookie("이벤트 팝업");
deleteCookie("팝업");
// console.log(getCookie2("이벤트 팝업"));
// console.log(getCookie2("이벤트 팝업2"));

// 쿠키 모르겠음 ******

// [로컬 스토리지] : 브라우저에 데이터를 저장하는 방법들중 하나
// pc에 데이터가 저장됨
// 쿠키, 세션과 다른점 : * 만료일이 없음. 만료기간이 없다.
// 브라우저 기능을 사용해야 하니까 window 객체안에 있는 메소드를 사용
// <getItem 메소드> : 값을 호출할때 사용한다
// getItem() 메소드는 매개변수로 "키값"
// window.localStorage.getItem();

// <setItem 메소드> : 값을 키와 함께 저장시켜준다
// window.localStorage.setItem("user_id","you");
// let a = window.localStorage.getItem("user_id");
// console.log(a);

// 쿠키, 로컬스토리지 이런 저장소에 민감한 값을 저장하면 안된다 -> 보안이슈

// // 쿠키랑 세션, 로컬 스토리지

// // 쿠키는 많이 들어봤을건데.

// // 쿠키는 해당 pc에 남아있다.

// // 쿠키 : 웹사이트를 방문하고 사용자의 pc에 기록할 간단한 데이터
// // pc에 저장해두었다가 값을 호출해서 사용할수 있다.
// // 브라우저가 종료되어도 남아있다.

// // 세션 : 브라우저가 동작되는 동안에 남아있는 데이터
// // 상태같은 내용을 다룰때 사용한 예) 로그인되어있는 상태
// // 브라우저가 종료시점까지 유지된다.

// // document객체 안에 있다.
// console.log(document.cookie);

// // 쿠키 구조
// // 키와 값이 있다.
// // 문자열로 저장 하면된다.

// // name : 쿠키의 이름(키)
// // value : 값
// // time : 유효시간
// function createCookie(name, value, time){
//     // 처음 필요한것 쿠키의 지속 시간
//     // 쿠키 유효기간 썩으면 못먹죠
//     // 시간과 날짜 년도 정보를 제공해주는 객체를 만들수가 있다.
//     // 생성자로 구현이 가능하다. new 뭘 생성해줘야하나
//     // Date

//     // 지금 시간에 정보를 가지고 있는 객체를 만들어준다.
//     let date = new Date();
//     console.log(date);

//     // 1시간 이후에 제거 하고싶어
//     let day = 1;
//     // getTime : 현재 시간
//     console.log(date.getTime() + time * 24 * 60 * 60 * 1000);
//     // 지금 시간에서 + 얼마나 쿠키를 유지할지.
//     // 추가해줄거임
//     // 쿠키가 제거될 시간을 구해서
//     // 값을 만들어 놓고.
//     // 만료시간

//     // set get
//     // set : 변경할때 네이밍으로 많이 사용한다.
//     // get : 정보를 호출할때
//     // 객체만들어서 정보를 가져오는경우 메소드는 get을 쓰고
//     // set
//     // setTime 메소드

//     // 하루 이후 시간
//     date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);

//     // 쿠키를 추가하는 방법
//     // 기본 규격
//     // 쿠키의명=값;expires+만료일+";path=/"
//     // path=/ 페이지의 경로에 대한 설정 쿠키를 다루는 경로'
//     // toUTCString 메소드 날짜시간 표시 방법을 변경해준다.
//     console.log(date.toUTCString());
//     // 날짜 형태를 변경해서 Wed, 22 Mar 2023 04:46:59 GMT 이런식으로
//     document.cookie = name+"="+value+";expires"+date.toUTCString()+";path=/";
// }

// // createCookie("이벤트 팝업","true",1);
// // createCookie("이벤트 팝업2","true",1);
// console.log(document.cookie);

// // 야매로 작성한것.
// // function getCookie(){
// //     let value = document.cookie.split("=");
// //     // = 제거하고 배열로 변경
// //     console.log(value)
// //     return value[1];
// // }

// // 쿠키함수를 작성해보자.
// // 정규식이 포함되기는 하는데 지금은 무시해도 된다.
// // 다들 정규식은 간단한것만 사용하고 필요한 내용이 생기면 찾고하면 편해서
// // 찾아서 작성하는 경우가 많아.
// function getCookie2(name){
//     // match 메소드
//     // 매개변수로 정규식 전달
//     let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
//     console.log(value);
//     return value ? value[2] : null;
// }

// // 쿠키를 제거 하는 함수 이 함수가 제일쉽다.
// // 쿠키를 상하게만 하면 된다. 날짜를 지나게
// function deleteCookie(name){
//     document.cookie = name +"=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
// }

// deleteCookie("이벤트 팝업");
// // deleteCookie("이벤트 팝업2");
// console.log(getCookie2("이벤트 팝업"));
// console.log(getCookie2("이벤트 팝업2"));

// // 로컬 스토리지
// // 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법들중 하나고.
// // pc에 데이터가 저장되고.
// // 쿠키와 세션과 다른점 만료일이 없어. 만료 기간이 없다.

// // 로컬 스토리지 쉽다.
// // 브라우저 기능을 사용해야하니까 window 객체안에 있는 메소드를 사용
// // getItem 메소드가 값을 호출할때 사용한다
// // get이 붙었네?
// // getItem() 메소드는 매개변수로 "키값"
// // window.localStorage.getItem()

// // setItem 메소드는 값을 키와 함께 저장시켜준다.

// // window.localStorage.setItem("user_id","soo");
// // let a = window.localStorage.getItem("user_id");
// // console.log(a);

// // 쿠키, 로컬스토리지 이런 저장소에 민감한 값을 저장하면 안된다.
// // 보안이슈

// // 오늘 내용도 어려운게 정상이기때문에
// // 조금만 노력합시다..
// // 과제 없고 복습.
