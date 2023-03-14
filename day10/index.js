//오늘은 함수! 함수라는걸 사용해보자.

// 함수는 실행할 코드들의 이름을 지어준다.(반복 사용하는 기능들을 묶어서 관리한다.)
// function 함수이름(){ 실행시킬 코드들 }
function fun(params) {
  console.log("fun함수 실행됨");
}
//fun이라는 함수를 선언했다.
// 변수를 배웠는데 변수들 원시타입
// 객체 배열 함수 레퍼런스 타입.
// 아 함수도 값이래
fun(); //함수를 실행 시키겠다.()를 붙여야지 함수 실행식.
// 함수를 실행시키면 스택이라는 곳에 함수 실행이 쌓이고 순서대로 실행이 된다.
// 실행 컨텍스트 들어가면

// var,let 이거 안붙이고 사용하면 안된다.
// 변수에는 스코프라는 개념이 있는데 이게뭐냐?
// 전역 스코프와 지역 스코프 이렇게 두가지가 있는데.
// 전역 스코프는 말 그대로 전역 모든곳에서 접근이 가능한 범위
// 지역 스코프는 특정 영역에서만 접근이 가능한 범위
// 전역 스코프에 너무 많은 변수를 선언하면 관리하기가 너무 힘들어진다.
// 특히나 협업할 때 A play변수를 만들었는데 B라는 사람이 또 play라는 변수를 사용할 수 있다고 했었다.
// 접은 안된다고 너무 남발하면 안좋다.

//이 친구가 전역 변수
let temp = "나는 문자열이야";

function con(temp) {
  temp = "나는 지역변수야";
  // 함수의 실행이 끝나면 해제된다.
  //없어짐..'
}

function con2() {
  let temp2 = "나 접근됨?";
  console.log(temp2);
}

con2();
// 호이스팅이라는 것이 있는데.
// 변수가 선언되기도 전에 호출했을 때.

function temp2() {
  // console.log(x);
  // 지역 변수
  // let x=5;
  //var 사용하지마 호이스팅이 일어나도 오류 안뱉음
  // 호이스팅이 발생하기 때문에 예상치 못 한 문제가 일어날수도 있다.
  // 주의해야한다!! 메모 변수는 코드를 작성할 때 최상단에 작성한다.
}

temp2();
let x = 5; //var 사용하지마 호이스팅이 일어나도 오류 안뱉음

// 매개변수
function fun2(v) {
  // 전달 받은 매개변수를 사용
  console.log(v);
}
// 전달받은 매개변수에 따라서 작업을 다르게 하고싶을때

function fun3(num) {
  console.log(`전달받은 매개변수는 : ${num}`);
}
let a = 1;
let b = 2;

fun3(a);
fun3(b);
fun3(3);

// cup이라는 함수를 만들고 컵은 물이라든지 음료수를 따를 수 있는기능
// cup이라는 함수를 만들고 매개변수로 drink 음료수를 따라줘보자.

function cup(drink) {
  // drink라는 매개변수에 '홍차'라는 값이 들어왔다.
  console.log(`컵에 ${drink}를 따랐음`);
  console.log(`컵에 ${drink}를 따라 마시니 기분이 좋아.`);
}

let c = "포도주스";

cup(c);

// 전달되는 매개변수에 따라 다른 결과물을 보여줄 수 있다.

// 거스름돈 자판기라는 기능을 만들어 보고싶은데 함수로 만들어 봐야겠다.
// 자주 사용할 것 같은 기능들을 함수로 작성해놓고 재사용.

// 매개변수는 여러개 전달도 가능하다.
function vending(money, unit) {
  // 거스름돈 자판기임..
  console.log(`${unit}짜리 ${money / unit}개`);
}

// 지폐 1000원짜리 넣고 500단위로 거슬러줘
vending(1000, 500);
vending(1000, 100);

let e = vending;
console.log(e);
// e라는 변수에 vending함수라는 값이 들어있기 때문에 함수 실행식처럼 사용이 가능하다.
e(2000, 100);

let f = vending(); //()함수의 실행식인데...함수가 실행시키는던데 ..이게 담길까? 메모
console.log(f);
// 변수에 함수를 대입할떄는 함수의 이름을 전달해야한다.

// 우리가 함수를 사용할 때 함수안에서 필요한 값을 내보낼수 있게 도와주는 식이 있는데.
// 이게 return 이라는 식이 있어요.

function ab(params) {
  // 함수의 실행 도중에 return식에 도달하면
  // return  뒤에 작성한 값을 반환하고 함수는 종료가 된다.
  return "나는 반환값이야ㅎㅎ";
  console.log("이건 안보임, return 시켜서 함수가 중지되고 return값을 내보냄");
}

let temp2_5 = ab;
let temp3 = ab();
console.log(temp2_5());
console.log(temp3);

// 함수 조금 심화

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));
function gg(num) {
  for (let i = 0; i < 10; i++) {
    console.log(`${num}단 ${num} x ${i}=${num * i}`);
  }
}

// 코드의 재사용성을 높히자!
gg(3);

// 성격 유형 검사지 함수 간단버전
function type(value) {
  switch (value) {
    case 1:
      return "분노조절 잘해";

    case 2:
      return "과묵하지만 상냥해";
    case 3:
      return "조용하지만 술마시면 각오해";

    default:
      break;
  }
}

console.log(type(1));

// 어제 과제 하시던거 그대로 이어서 하는데 오늘은 복습날 했던거 아직 이해 안되는 부분들
// 쭈욱 보시면서 진행하고 함수를 사용해서 어제 과제 리팩토링 하세요.

let qwe=1;
{
  console.log(qwe);
  
}