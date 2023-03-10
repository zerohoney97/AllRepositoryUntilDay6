// 우리가 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면 돼요
//  if문 비교문

if (false) {
  // 여기 있는 구문을 실행시키는 조건은
  // if()괄호안에 true냐 false의 차이로 실행을 시킨다.
  console.log();
  // 불이 꺼져있으면 실행될 일 자체가 없다.
  //   여기 내용을 실행시키고 싶을때도 있고, 실행시키고 싶지 않을 때도 있는데.
  // 괄호에다 연산자를 대입하면 값을 비교하면서 실행시키거나
  // 실행 안되게 할 수 있겠구나?
}

let age = 5;
let age2 = 5;

// age 나야
// age가 age2보다 값이 작으므로 true
if (age < age2) {
  console.log("ㅎㅇ");
}

// false면 실핼 시키고 싶은데..

// if (age > age2) {
//   console.log("ㅎㅇ");
// } else {
//     console.log('ㅎㅇ틀림')
// }

if (age < age2) {
  console.log("나이가 작다");
} else if (age > age2) {
  console.log("나이가 크다!");
} else {
  console.log("나이가 같다!");
}

// 반복문 for문
// 여러번 반복 실행해야할 구문이 있을 때 사용한다.
// 반복문중에 하나이고
let b = 5;

// 변수선언하고, 값을 확인하고, for문 안에 있는 구문을 실행하고 나서
// 값을 증가시킵니다.
// 증가 시킨 다음에 비교를 하고 맞으면 true면 구문 다시 실행
// 증가되다가 비교문이 false로 안맞게 되면 그때 반복문 종료
// 무한으로 반복시키녀 사이트가 터짐 이러면 안된다.(조건식을 잘 확인하세요)
for (let a = 1; a < 10; a++) {
  console.log(a);
}

// 구구단 만들기

let guguVal = document.querySelector("#gugu_id");
let gugu = document.querySelector("#start_gugu");
let preText = document.querySelector("#pre_text");
let resultText = document.querySelector("#result_text");
let result = "";
let guguRealVal;
guguVal.addEventListener("change", () => {
  guguRealVal = guguVal.value;
  preText.innerHTML = `${guguRealVal}의 구구단입니다!(9단까지 진행됩니다.)`;
});

gugu.addEventListener("click", () => {
  guguFunc(guguRealVal);
});

let guguFunc = (val) => {
  for (let a = 1; a < 10; a++) {
    console.log(`${val}*${a}=${val * a}`);
    result += `${val}*${a}=${val * a}` + "\n";
  }
  resultText.innerHTML = `${result}\n`;
};

// 수상자 호출하기
let student = document.querySelector("#reward_id");
let rewardStudentsList = document.querySelector("#reward_students_list");
let toSearchStudent = document.querySelector("#input_student_reward");
let studentList = ["이무헌", "이재영", "정현욱"];
let start_btn_reward = document.querySelector("#start");
start_btn_reward.addEventListener("click", () => {
  let new_student_list = studentList.filter((a) => {
    return a !== toSearchStudent.value;
  });
  console.log(new_student_list.toString());
});

function Person(first, last, age, gender, interests) {
  // 속성과 메소드 정의
  this.first = first;
  this.last = last;
  //...
}

let person = new Person("asd", "dd");

Person.prototype.age = "12";
console.log(person.age);

let ob = { a: "asd", b: "fdf", c: "frr" };

for (const key in ob) {
  console.log(ob[key]);
}

for (let i = 1; i <= 60; i++) {
  if (i % 3 === 0) {
    console.log(`짝!`);
  } else {
    console.log(`${i}는 3의 배수가 아닙니다!`);
  }
}

// for (const iterator of ob) {
//     console.log(iterator)
// }
