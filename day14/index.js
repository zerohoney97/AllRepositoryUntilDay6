//DOM 내용 추가

//우리가 사용하는 div,p,h1 태그들

// DOM 트리

// DOM트리 구조 한 번 보자.

// DOM트리의 기본 단위는 노드라고 해요.

// 문자를 태그사이에 넣어서 태그를 추가
// document.querySelector('.add_class').innerHTML='<div>as</div>';

// 노드에 추가 하는 방법
// div 태그를 생성하는 방법
// createElement 태그 생성해주는 메소드
// createElement('태그명')
let _div = document.createElement("div");
// 여기싸지는 생성해서 _div변수에 담았고
// 생성된 태그는 메모리 공간에 있는것.
console.log(_div);
// 생성한 태그에 내용을 넣고
_div.innerHTML = "<p>내용이</p><div>없냐</div>?";
// 생성한 태그에 클래스도 추가
_div.classList.add("new_tag");
// 태그를 추가하고 싶은 위치에 추가를 해줘야 트리에 추가되어 보인다.
// 원하는 위치에 추가할거야
// 사용해야할 메소드가 있는데

// append()메소드
// 태그 추가

setTimeout(() => {
  document.querySelector(".add_class").append(_div);
}, 2000);

document.body.append(_div);

// append메소드는 원하는 위치에 태그를 추가할 수 있다.
// 태그참조 append(생성한 태그)=태그참조하고 태그의 내용으로 생성한 태그가 추가된다.

// innerHtml로 다 추가=>문자로 내용이 들어가서 보안이 좀 취약합니다.
// append():DOM 트리의 노드이기 때문에 보안이 좋다. 문제가 없다.태그작업을 세분화 가능하다.

// 태그의 내용 전부 확인
console.log(_div.innerHTML);

// 태그의 태용에서 문자만 가져오고 싶어
// innerText가 있어요
// 태그 사이의  문자만 가져온다.
// textContent와 다른점=> 태그가 적용되냐, 안되냐 차이
console.log(_div.innerText);

// button태그 생성
let _button = document.createElement("button");
_button.innerHTML = "눌러봐";

// 태그를 만들고 우리가 사용하는 것 처럼 그대로 사용하면 되고
// 내용을 추가해준다음 원하는 위치에 태그를 넣어주면 된다.

_button.onclick = function () {
  // remove()메소드가 _div태그를 제거
  // 원하는 태그를 제거할 수 있다.
  // 태그의 자식 태그도 제거 할 수 있다.
  // 태그의 자식 태그는 removeChild
  // _div.remove();
  console.log(_div);
  // document.body.removeChild(_div);
  // div 태그를 body의 내용에서 찾아서 제거해준다.
};
document.body.append(_button);

// onclick 이렇게 이벤트명으로 직접 함수를 대입해서 추가하는 방법
// 함수를 덮어씌운다.
// 또 다른 방법이 하나 더 있다.

// 이벤트를 구독 시킨다.
// addEventListener 메소드의 매개변수로 구독할 이벤트 이름
_button.addEventListener("click", function () {
  console.log("나 클릭 구독중");
});

_button.addEventListener("click", function () {
  console.log("나도 구독중");
});

// addEventListener 메소드는 이벤트를 누적 시킬 수 있다!! 즉, 추가가 가능 하다는 얘기
// onclick은 이벤트를 덮어쓴다.

_button.onclick = function () {
  console.log("나 온클릭");
};

console.log(_button.onclick);

_button.onclick = function () {
  console.log("나 온클릭2");
};
console.log(_button.onclick);

//이벤트들 뭐있나?

// load=>페이지 기타 요소들의 그릴 준비 로딩이 끝날을 때
// on이 붙으면 어트리뷰트 방식

// load이벤트 구독
// addEventListener('이벤트의 타입',함수의 내용)을 사용해서
// 이벤트를 구독해놓는다.
window.addEventListener("load", function () {
  // load이벤트가 실행되면 내용실헹
});

//onresize:브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.addEventListener("resize", () => {});

// scroll 이벤트:사용자가 태그나 페이지에서 스크롤 했을 때
// 스크롤 값이 없으면 동작 하지 않아요.

// 태그의 이벤트로 원하는 이벤트를 구독하면 그 태그에서 그 이벤트가 발생할 때
// 실행된다.

// 여기는 우리가 생성한 태그에서 scroll 이벤트에 구독
_div.onscroll = () => {
  // 스크롤 이벤트가 실행되면 우리가 추가할 기능
  console.log("나 스크롤 되고있니?.");
};
// 여기는 body 태그에서 스크롤 이벤트가 발생할 때
document.body.addEventListener("scroll", () => {
  console.log("나 스크롤 되고있니?.");
});

// // onkeydown:사용자가 키보드를 눌렀을 때
// window.onkeydown = function () {
//   console.log("나 키보드 눌렀음");
// };
// // onkeyup: 사용자가 키보드를 누르고 땠을때

// window.onkeyup = function () {
//   console.log("키보드를 똈음");
// };

// // onkeypress:키보드를 누르고 있을 때(누르고 있으면 계속 실행)
// window.onkeypress=function(){
//     console.log('키보드를 누르고 있는 동안')
// }

// 기능 생각하다가 사용할 경우가 있을 때
// onkeydown하는 순간 동작할 기능하나
// 기능을 누르고 있는 동안 발생할 기능 둘

// 마우스 이벤트
// click:사용자가 해당 태그를 클릭했을 때 발생하는 이벤트
window.onclick=function(){
    console.log('asd');
}

// dbclick:더블 클릭 했을 때 실행되는 함수
window.ondblclick=function(){
    console.log('더블 asd')
}

//mousedown:마우스를 누르자 마자 실행되는 이벤트
window.onmousedown=function(){
    console.log('마우스 키다운');
}

// mouseup:마우스를 누르다가 땠을 때 실행되는 이벤트
window.onmouseup=function(){
    console.log('마우스 키 업')
}

// 마우스 키를 누르고 이동한 뒤 키를 뗐을 때
// 좌표로 계산해서 동작해야 하는 기능을 만들 때 사용합니다.

// mousemove: 마우스가 태그 위에서 이동 되는 동안
_div.onmousemove = function () {
  console.log("마우스 이동");
};

let box = document.querySelector(".box");

// mouseenter:마우스를 태그위로 올려졌을때 실행되는 이벤트
// hover같네 ㅎㅎ
box.onmouseenter = function () {
  console.log("마우스가 올려짐");
};

// mouseleave:마우스가 태그에서 위에서 빠져 나갔을 때 실행되는 이벤트
// hover 같네
box.onmouseleave = function () {
  console.log("마우스가 나가짐");
};

// 기능을 hover처럼 추가 할 수 있겠구나.

// 개발할 때 pc, 모바일 이렇게 웹을 만들텐데
// 모바일 환경에서 실행되는 이벤트

// 모바일 터치
// touchstart:화면을 터치한 순간
window.ontouchstart = function () {
  console.log("모바일 터치됐어");
};

// touchend:화면을 터치하다가 떼면
window.ontouchend = function () {
  console.log("뗐다!");
};

//touchmove:화면을 터치하고 이동할 때.
window.ontouchmove = function () {
  console.log("터치하고 이동중");
};

// 이벹르르 좀 알아봤는데.
// 이벤트 실행될 때 매개변수로 해당 이벤트의 내용이 전달 됩니다.
// click의 이벤트를 보자
box.onclick = function (e) {
  // 이벤트의 내용들 이벤트가 실행되면 이베트의 내용이
  // 값으로 넘어온다.
  console.log(e);
  //해당 이벤트가 일어난 타겟
  // 지금은 window에 click이벤트가 일어나면 실행되는
  // 기능을 실행시켰고
  // 클릭된 태그를 가져온다.
  console.log(e.target);
};

// 마우스의 위치를 가져와봐야겠다.
// window.onmousemove = function (e) {
//   // 이벤트의 타입을 확인해보자.
//   console.log(e.type);
//   //   해당 이벤트 일어나면 마우스의 좌표 x값
//   //   좌표값은 px단위이다.
//   //   0~브라우저 너비 크기
//   console.log(e.pageX);
//   //   해당 이벤트 발생시 마우스 좌표 y값
//   //   0~브라우저의 높이
//   console.log(e.pageY);
// };

// 키보드 입력
window.onkeydown = function (e) {
  console.log(e.keyCode);
  // ascii 코드:숫자로 표현된다.
  // A를 입력하면
  if (e.keyCode == 65) {
    console.log("A키를 입력 받았다.");
  }
};

// 기본 동작을 취소하는 방법

let _button2 = document.querySelector("#button2");

_button2.onclick = function (e) {
  e.preventDefault();

  //   브라우저 상에서 기본 동작되는 기능을 제거 해줄 수 있다.
};
