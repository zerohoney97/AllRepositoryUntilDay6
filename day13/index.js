// 오늘은 생성 함수
// 객체를 함수로 만들 때 많이 사용해요~
// 뭔가를 생성한다고 하네 이름부터
// 객체를 생성할 때 사용하는 함수
// 모양이 어떻게 되냐?

// 생성자 함수다.
function createObj(_name, _atk, _def, _speed) {
  this.name = _name;
  this.atk = _atk;
  this.def = _def;
  this.speed = _speed;
}

createObj("이무헌", "ㅇㅇ", "ㅇㅇ", "ㄴㄴ");

// 이런모양으로 생성자 함수를 만들고
// 이 함수를 가지고 객체를 생성할때
// new 새로운 키워드!! 사용할 거다
// new는 메모리에 공간을 주고 할당,동적으로 사용할 수 있게 해준다.=>동적 할당
// 새로운 개게를 생성하기 위한 메모리 공간을
// new 키원드를 사용하면 빈 객체를 만들어주고 생성자 함수를 실행시켜서
// this 객체를 참조한다 했다.this가 빈객체
// 키값을 추가해주고 객체를 만들어준다.
// 객체를 뭐라고 보면될까 옆에 있는 친구나 본인.
// 하나의 객체를 사람이라 표현했을 때
// 한 사람에 대한 정보를 객체로 만들어 놓고 사람을 생성
// 물건을 생성할 때도 객체에 그 물건의 정보를 키와 값으로 만들어서
// 하나의 오브젝트화 시킨다.
let obj = new createObj("고블린", 100, 100, 10);
console.log(obj);
let obj2 = new createObj("트롤", 200, 100, 10);
console.log(obj2);
// 오브젝트화 객체화 시킨다.
// 개발자는 객체를 잘 다뤄야한다.

// obj['name']객체의 값에 접근하는 방법
// obj.name 객체의 값에 접근하는 방법

console.log(obj["name"]);

let arr = [1, 2, 3, 4];
arr.forEach((a) => {
  console.log(a);
});

// for in
// 자동 완성 했을 때 object라고 적혀있는 변수를 우리가 보고싶은
// 객체를 넣어준다. 메모
for (const key in obj) {
  // 키값이 순서대로 나온다.
  //  키값이 key변수에 순서대로 담긴다.
  //   console.log(key);
  console.log(obj[key]);
  //   밑처럼 하면 안됨
  // 객체 안에 있는 key라는 키값을 찾는 식이다.
  //   obj.key
}

// 이제 페이지도 사용해보자.
// 페이지에 자바스크립트를 이용해서 동적인 기능을 넣어보자.

// BOM 브라우저 객체
// 브라우저의 기능들을 객체로 사용할 수 있게 해준것.

// onload메소드는 브라우저의 랜딩이 끝나고 보여줄 준비가 되었을 때
// 실행되는 함수 메모 =>html문서 랜더링을 끝내고 실행되는 함수
// onload라는 키값에 함수 값을 전달
window.onload = function () {
  console.log("나 랜더링");
};
// DOM(문서 객체 모델):문서를 객체의 모양으로 만든것.
// 문서의 접근을 가능하게 해준다.

// DOM은 페이지에 있는 태그들을 객체로 표현한 것.
// document 객체에서 택를 선택하는 방법
// 객체를 이용해서 찾고 싶은 태그를 자바 스크립트로 가져와서
// 사용할 수 있다.
console.log(document);
// ID ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- -----------
// getElementById 메소드로 태그의 아이디를 찾아서 태그를 가져올 수 있다.
let div2 = document.getElementById("div1");
// 아이디 값이 있는 태그는 그냥 변수처럼 사용해도 된다. 메모
//그래서 아이디는 중복되지 않게.
let div3 = div1;
// querySelector만능 이 친구만 사용해도 된다.
// #을 붙여서 아이디라고 알려주고 div1을 찾아줘
let div4 = document.querySelector("#div1");

console.log(div2);
console.log(div3);
console.log(div4);
console.log(div3.textContent);

// class  ----------- ----------- ----------- ----------- ----------- -----------
// 이게 안된다...
// 왜그럴까? 클래스는 중복될 수 있게 만들었으니까
// 안되게 한거다.

let div5 = document.querySelector(".classDiv2");
// 문서를 읽다가 첫번째로 발견된 태그를 하나만 가져온다. 메모
// querySelector
// console.log(div5);

// querySelectorAll 해당하는 전체 태그들을 가져온다.
let divArr = document.querySelectorAll(".classDiv2");
console.log(divArr[1]);

// 태그 이름 선택자 ---------------------------------------------------------------------------------------------------
// querySelector 변수의 내용은 css 선택을 넣어주는 거구나
// 문자열로 넣어주면 된다.
let div6 = document.querySelector("div");
console.log(div6);

// 이제 우리는 웹페이지를 만들 수 있는 능력이생겼어
// 대단한 사람이 됐다.

// 텍스트를 태그에 넣어주고 싶어!
// 안에 다른 태그가 있다면 그 태그까지 뜬다.즉, string으로 안에 있는 태그까지 변경이 가능하다!
div2.innerHTML = "<ul> <li>나 강림</li></ul>";
// div2태그의 내용을 추가 할 수 있다.<div>여기에 내용이 추가됨</div>
console.log(div2.innerHTML);

let div7 = document.querySelector(".classDiv2");
div7.innerHTML = "나는 classDiv2 태그중 첫번째야";
let div8 = document.querySelectorAll(".classDiv2");
div8[3].innerHTML = "나 4번째 태그";

// ---------------------------------------------------------------------------------------------------
// 버튼에 기능을 넣어보자

// 버튼을 누르면 함수를 실행시켜보자.
function btnFn() {
    // classDiv2 클래스를 가지고 있는 태그들을 classDiv2변수에 담고 
  let classDiv = document.querySelectorAll(".classDiv2");
//   그 배열을 forEach순회하면서 아이템을 매개변수로 받았다.
  classDiv.forEach(function (i) {
    i.innerHTML = "dd";
  });
}

// html에서 함수를 가져와서 사용하자