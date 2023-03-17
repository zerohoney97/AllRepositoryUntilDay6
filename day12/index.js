// 오늘 콜백 함수
// 콜백함수가 뭐지?
// 함수도 값이라 했는데
// 함수의 매개변수로 함수를 전달해서
// 내가 함수에 코드작성할때 필요한 순간에 매개변수로 받은
// 함수를 실행시킨다.
// 콜백함수를 한 번 만들어보자

function test1(callBack) {
  console.log("1번 작업끝");
  console.log("2번 작업끝");
  if (true) {
    callBack();
  }
}

function test2() {
  console.log("나는 콜백함수야");
}
test1(test2);

// 배열메소드
let arr = [1, 2, 3, 4];
arr.map((a, v) => {
  console.log(a);
  console.log(v);
});

// 배열 메소드 map을 좀 흉내내보자
let arr2 = {
  map: function (callBack) {
    // 함수의 매개변수 갯수
    // 그 함수의 매개변수가 몇개 들어감?=>함수의 length 메모
    // 매개변수 안 받는 함수인데 매개변수 전달하면 터짐 ㅎㅎ
    if (callBack.length === 1) {
      let a = 2;
      console.log("나는 매개변수를 한개 받았어 ㅎㅎ", 2, "가 결과야");
      callBack(a);
    } else if (callBack.length === 2) {
      let a = 2;
      let b = 3;
      console.log("나는 매개변수를 두개 받았어 ㅎㅎ", 2, 3, "가 결과야");

      callBack(a, b);
    } else {
    }
  },
};

arr2.map((a, b) => {
  console.log("나는 콜백 함수야", a, b, "이거야");
});

function temp(callBack) {
  if (callBack.length === 0) {
    callBack();
  } else if (callBack.length === 1) {
    let temp = "사과";
    callBack(temp);
  } else if (callBack.length === 2) {
    let temp = "포도";
    let temp2 = "딸기";
    callBack(temp, temp2);
  } else {
    console.log("너 매개변수 초과야 난 두개만 받을 수 있어.Error");
  }
}

function temp2(v, b) {
  console.log("나는 콜백 함수야", v, "를 받았어", b, "도 같이 받았어");
}

temp(temp2);

// 콜백 한 번 만들어보자
// 메소드로 만들어보자
// function 함수:일반 함수
// 메소드:객체 안에 있는 함수
// 키 값은 원하는데로 이름 지정해도 괜찮고
// 매개변수 3개까지 받을 수 있는 함수를 만드는데
// 전달 받은 콜백함수는 구구단을 보여주는 함수다.
// 매개변수 하나=>2단,두개=>2단,3단,세개=>2,3,4단

let guguArray = [10, 5, 6];

let callBackGuguObj = {
  a: guguArray[0],
  b: guguArray[1],
  c: guguArray[2],
  callBackGugu: function (callBack) {
    if (callBack.length === 1) {
      console.log("매개변수 하나=>2단만");
      callBack(callBackGuguObj.a);
    } else if (callBack.length === 2) {
      console.log("매개변수 둘=>2,3단만");

      callBack(callBackGuguObj.a, callBackGuguObj.b);
    } else if (callBack.length === 3) {
      console.log("매개변수 셋=>싹 다!");

      callBack(callBackGuguObj.a, callBackGuguObj.b, callBackGuguObj.c);
    }
  },
};
// arrow 안쓰고 함수를 만들 때
// 메모=>매개변수 디폴트 파라미터를 쓸 때는 일반 함수 쓰자, 일일히 고치는게 힘들다,..
function guguDan(a = 0, b = 0, c = 0) {
  console.log("구구단을 애자!구구단을 애자!");
  if (a !== 0 && b !== 0 && c !== 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${b}*${i}=${b * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${c}*${i}=${c * i}`);
    }
  } else if (a !== 0 && b !== 0 && c === 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${b}*${i}=${b * i}`);
    }
  } else if (a !== 0 && b === 0 && c === 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
  }
}

// 여기선 arrow 썼음
callBackGuguObj.callBackGugu((a, b = 0, c = 0) => {
  console.log("구구단을 애자!구구단을 애자!");
  if (a !== 0 && b !== 0 && c !== 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${b}*${i}=${b * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${c}*${i}=${c * i}`);
    }
  } else if (a !== 0 && b !== 0 && c === 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
    for (let i = 1; i < 10; i++) {
      console.log(`${b}*${i}=${b * i}`);
    }
  } else if (a !== 0 && b === 0 && c === 0) {
    for (let i = 1; i < 10; i++) {
      console.log(`${a}*${i}=${a * i}`);
    }
  }
});

// 선생님의 답
// 객체를 선언하고
let obj2 = {
  gugu: function (callBack) {
    switch (callBack.length) {
      case 1:
        callBack(2);
        break;
      case 2:
        callBack(2);
        callBack(3);

        break;
      case 3:
        callBack(2);
        callBack(3);
        callBack(4);

        break;
      default:
        console.log("너 매개변수 갯수 확인해");
        break;
    }
  },
};

// 어떻게 만들어도 상관은 없지만
// 기능 단위로 함수를 만드는 습관은 가지는게 좋다.
function temp3(a, b, c) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a}x${i}=${a * i}`);
  }
}
obj2.gugu(temp3);

// 콜백 중요하니까 오늘 정리 잘해놓고 연습공부 하셔야 합니다!

// 함수 실행되면 스택이라는 곳에 쌓인다고 했는데,
// 스택:후입 선출!
// 큐:선입 선출!

// 콜 스택 개념을 알아보자!
// 스택은 데이터를 사용하기 위해서 잠시 저장 해놓는것
// 데이터들을 쌓아놓는다 보면 된다.
// 후입 선출 마지막에 추가된 데이터부터 제거.
// 우리가 이사를 가는데 상자에 짐을 넣어놓고 위에서 부터 짐을 꺼내는 형태처럼 보면된다.
// 함수 실행 컨텍스트 함수를 실행하게 되면 스택에 추가가되고 반환될때 스택에서 제거된다.
// 함수실행 컨텍스트:함수가 실행될 때 마다 생성된다. 함수의 실행 정보를 가지고 있다.
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다르다.
// 콜 스택이 쌓이게 돼서 크기가 초과하면 스택 오버플로우 에러발생(더 이상 실행을 할 수가 없어.)
// 함수를 무한으로 실행할 때 나올 수 있다.

// 함수르 만들어보자

function fun1() {
  func2();
}
function func2() {
  fun3();
}

function fun3() {
  console.log("ㅎㅎ");
}

fun1();

// 자바 스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1 함수 실행 구문에서 함수의 실행 컨텍스트가 생성-> fun2 함수 실행 컨텍스트 생성->
// fun3함수 실행 컨텍스트 생성
// 이렇게 스택에 쌓이고
// 마지막에 추가된 fun3함수의 실행 컨텍스트 제거-> fun2->fun1
// 콜스택확인
// 개발자모드 열고 소스 들어가서 해당 js파일 들어간 후 원하는 곳 디버깅모드에서 하듯이 클릭 그 다음 break point 키자

// 일반함수를 알고 있어. 이제 잘 씀! 못 쓰면 연습을 좀 더 하자.
// 일상에서 코드가 보이기 시작하면 이제 개발자가 됐어!

// 화살표 함수라는게 있어...화살표

// function asd(){}

// 화살표 함수
// ES6에 새로나온 함수의 방식이다.
// ES6 템플릿 리터럴
// 우리가 사용하던 일반함수 모양이 다르다.
//  => 화살표 모양으로 함수를 선언한다.
// 선언 형식
let temp4 = () => {
  return console.log("나는 화살");
};

temp4();

//화살표 함수는 일반함수와 차이들이 있는데
// 함수에서 값을 반환할 때 return식을 사용해서 반환했는데
// return 식 없이도 반환 가능
// 함수와 똑같이 매개변수는 괄호에 넣으면 된다.
let temp5 = (a) => a + 2;

let ab = temp5(2);
console.log(ab);

// 여기에서 개념 2개=>연결된 개념을 좀 설명할거라 뇌가 아픈

// 제일 중요하고 큰 차이점 면접에서 질문
// this라는 개념이 있다.
// this 키워드 : 자바스크립트 객체를 참조하는 특별한 키 구문
// 일반함수,화살표함수의 차이는 this의 차이 this가 가르키는 대상이 달라요.
// 일반 함수 this:함수가 실행될 때 위치 (스코프)에서 this를 가져온다,(다이나믹 스코프)
// 화살표 함수의 this: 화살표 함수 내부의 this는 화살표 함수를 선언한 위치에서 this를 가져온다.(렉시컬 스코프)

let d = () => {
  console.log(this);
};
let obj = {
  a: function (params) {
    b();
    console.log(this);
    let c = () => {
      console.log(this);
    };
    c();
    d();
  },
};
function b() {
  console.log(this);
}
obj.a();

// window 객체
// BOM(Browser Object Model):브라우저를 객체 모델로 표현한 것.
// 브라우저 기능을 접근할 수 있는 객체
// window 객체

// 비동기 함수
// 동기 함수

// 동기:순차적으로 실행된다. 작업이 끝나고 다음 작업 진행
// 비동기:다른 코드들과 함께 동기적으로 실행되지 않아요
// 비동기:순차적으로 실행되지 않고 작업을 하는 도중에도 다른 작업이 가능하다.

// node.js들어갔을 때 더 잡힌다. 예)서버에서 값을 가져오는 동안 페이지가 멈춰있지 않고 다른
// 작업물은 정상적으로 돌아간다. 서버에서 값을 가져오는 작업이 비동기,페이지가 돌아가는게 동기

// 비동기 함수는 무엇이 있을지
// setTimeout는 비동기 함수고 매개변수 1=>함수,2=>시간
setTimeout(() => {
  console.log("나는 1초 뒤에 실행돼");
}, 1000);
console.log("나는 동기임 ㅎㅎ");

// 오늘 정리 잘하자
// 전역 객체
// window객체임 메모

// 프로토 타입 연습 메모
function nameText(params) {
  this.name = "이무헌";
  this.age = 23;
}

let c = new nameText();
nameText.prototype.getAge = function (age) {
  console.log(this.age + age);
};
console.log(c.age);
c.getAge(20);

// function call 메모
function tempFunc(params) {
  this.age = 20;
  console.log(this.age);
  console.log(params);
}
const context = this;

tempFunc.call(context, 3);

