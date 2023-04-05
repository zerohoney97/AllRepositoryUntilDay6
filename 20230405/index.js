//프로토타입
// 자바스크립트의 객체는 프로토타입을 상속받는다.
// 객체의 원형

// object.prototype

// function Car(model, color, speed) {
//   this.model = model;
//   this.color = color;
//   this.speed = speed;
//   this.accel = function () {
//     this.speed -= 10;
//   };
// }

// // 생성자 함수로 동적할당해서 생성
// let temp = new Car("benzs", "white", 200);
// let temp2 = new Car("morning", "black", 200);
// console.log(temp);
// console.log(temp2);

// function Car(m, c, s) {
//   this.model = m;
//   this.color = c;
//   this.speed = s;
//   this.speedUp = function () {
//     this.speed += 10;
//     return this.speed;
//   };
// }

// let temp = new Car("matiz", "red", 150);
// temp.battery = true;
// temp.speedUp = function () {
//   this.speed += 20;
//   return this.spped;
// };

// console.log(temp);
// temp.speedUp()
// console.log(temp);

// 이런 방식은 객체에 새 속성을 추가할 수 있는데
// 원형에 추가는 할 수가 없다.

function Car(m, c, s) {
  this.model = m;
  this.color = c;
  this.speed = s;
}

// 프로토타입의 정의 기본형식
// 객체명.prototype.메서드=function(){}
// 이 원형을 가진 객체들은 전부 프로토타입으로 추가한 메소드를 사용할 수 있다.
// 생성자에 의해 생성된 모든 객체는 생성자 함수의 모든 속성과
// 메소드를 상속 받는다.
// 각 객체는 상속된 속성과 메서드를 메모리에 저장해놓고
// 동일한 메서드는 메모리에 저장을하고 중복저장을 피한다.
// 생성자 함수에 메서드를 정의하지 않고 생성자 외부에 별도의
// 메서드를 정의해서 사용하는 방법이 프로토타입.
Car.prototype.speedUp = function () {
  this.speed += 20;
  return this.speed;
};

Car.prototype.speedDown = function () {
  this.speed -= 20;
  return this.speed;
};

let temp = new Car("봉고", "검정", 100);
let temp2 = new Car("다마스", "검정", 100);
console.log(temp.speedUp());

// 객체에 추가 stop메서드를
temp.stop = function () {
  this.speed = 0;
  return this.speed;
};

Car.prototype.stop = function () {
  this.speed = 0;
  return this.speed;
};
// 생성자 함수로 만든 객체들에게 전무 메서드를 추가해줄때
// 프로토 타입으로 원형에 메서드를 추가해주자
console.log(temp.stop());

// temp2는 없으니까
console.log(temp2.stop());
String.prototype.replaceOf = function () {
  console.log("나는 프로토 타입으로 추가 됐어");
};

// 문자열의 원형은 String이고
console.log("가,나".replace("가", "나"));
