class Mother {
  constructor(name, age) {
    //생성자 함수
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return console.log(`내 이름은:${this.name} 나이는:${this.age}입니다.`);
  }
}
let temp = new Mother("아무개", 30);
temp.getInfo();

//클래스의 상속 자식클래스가 부모클래스를 상속받아서 부모 클래스의 기능을
// 사용 할 수 있다.
// 클래스를 사용하는 이유
//extends 키워드를 사용해서 클래스를 상속 시킬 수 있다.

//부모클래스의 기능을 상속 받아서 사용 할 수 있다.
class Child extends Mother {
  // 비워놓자
  //비워놓으면 자동으로 생성자가 만들어진다 했음
  //생성자 자동 생성
}

let temp2 = new Child("나는 자식 ", 30);
temp2.getInfo();

class Animal {
  //동물이라는 클래스
  constructor(name) {
    this.name = name; //초기화
    this.speed = 0;
    this.age = 20;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name}은 ${this.speed}로 달리는중 나는 부모의 함수임`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name}이 멈춤`);
  }
}

let ani = new Animal("동물");
ani.run(10);
ani.stop();

class Cat extends Animal {
  //부모의 함수를 받아서 오버라이딩
  //함수를 받아서 기능을 재정의 할 수 있다.
  // run이라는 함수가 없으면 부모에서 상속받은 run 함수를 실행하고
  // run이라는 함수가 재정의 되면 재정의된 함수를 사용할 수 있다.(함수 오버라이딩)
  run(speed) {
    this.speed = speed;
    console.log(
      `${this.name}은 ${this.speed}로 달리는 중 나는 자식의 오버라이딩 함수임`
    );
  }
  speak() {
    console.log("take a look");
  }
  stop() {
    //부모의 stop을 실행 재정의해서 사용할 수는 있는데
    // 상속받은 부모의 클래스 키워드로 부모위 함수를 실행 시킬 수 있다.
    //상속받은 부모의 클래스 키워드는 super
    super.stop();
    this.speak();
  }
}

let cat = new Cat("떼껄룩");
cat.run(10);
cat.stop();

// 이렇게 하지 마세요
//생성자 함수를 밑에처럼 정의하면
// 안됨. 상속받은 클래스는 반드시 부모 클래스를
//호출해서 사용하자 일반적인 함수는 new키워드를 함께 사용하면 빈객체가 만들어지는데 this라는 키워드에
// 객체를 참조시킨다.
// 반면에 상속 클래스 Man 생성자 함수가 실행되면 일반함수에서 일어나는 일이 발생하지 않는다.
// this는 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주길 바람
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let ma= new Man('gg',30);
console.log(ma)