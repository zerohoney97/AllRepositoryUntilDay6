console.log("주말 잘 쉬었니? ");
let j = true;
for (let i = 0; i < 10; i++) {
  if (!j) {
    console.log("낫 발사");
  }
  j = !j;
  console.log("발사");
}

// 컴파일 언어와 인터프리터 언어
// 개념

// 컴파일러 언어:프로그램 코드를 컴파일해서 컴퓨터가 알아들을 수 있는 기계어로 번역 해준다.  소스코드 전체를 한 번에 번역하고 실행파일을 만들어서 실행해준다.
// 장점: 파일의 크기가 큰데 실행속도가 빠르다.
// 실행전에 전체 코드를 번역해서 오류를 미리 알 수 있다.
// 대신 번역 과정 시간이 좀 걸린다.
// c,c++,java,pyton 등등

// 인터프리터 언어:프로그램 코드를 한 줄씩 읽으면서 번역과 실행을 한다.
// 장점: 프로그램 실행도중에 동적으로 소스코드를 수정이 가능하다.
// 실행하는 크기가 작고 소스 코드의 수정이 용이하다.
// 그래서 디버깅이 하기가 편하다.
// 소스 코드가 실행될떄 마다 번역과 실행을 반복해서 속도는 좀 느리다.
// 오류를 실행중에 발견 할 수 있다.
// javaScipt 등등 있다.

// 논리 연산자 || , &&
// || :논리합(OR)
// a||b => a나 b나 둘중에 하나라도 참이면 참
// 0||0=> false
// 1||0=>true
// 논리곱(AND)
// a && b =>둘 다 참이어야 참
// 0    0=>false
// 1    0=>false
// 0    1=>false
// 1    1=>true

console.log((false && true && false) || true);

console.log(true && false);

let text = "집에 가고싶다.";
let age = 20;
if (text === "집에 가고싶다" || age === 20) {
  console.log("ㅎㅇ");
}

// 삼항 연산자
// 한줄로 코드들을 표현 할 수 있고, 잘쓰면 편하다.
// 가독성이 많이 떨어진다. 많이 사용 x

//  조건 ? (앞의 조건이 참):(앞의 조건이 거짓일때)

age === 20 ? console.log("1") : console.log(2);
// 3번만 더 들어가도 안된다.(복잡함)

// 조건문 if 반복문 for 문이 있었는데
// 이번에 배울거는 switch  조건문

// switch ("값을 여기에 넣으세요") {
//   case 1: //if 부분이다.
//     break;
//   case 2: //else if 부분이다.
//     break;
//   case 3: //else if 부분이다.
//     break;
//   case 4: //else if 부분이다.
//     break;
//   case 5: //else if 부분이다.
//     break;
//   case 6: //else if 부분이다.
//     break;
//   default: //else
//     break;
// }

let month = 10;
let monthName = "";

switch (month) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
  case 10:
    break; //이게 뭐임? 멈춰주는 역할 안쓰면 밑에 뚫림(즉, 밑으로 break 있을 때까지 실행)
  case 11:
    //값이 11이니까 여기를 실행해야겠네?
    console.log("November");
    break;
  case 12:
    break;

  default:
    break;
}

switch (1) {
  case 1:
    console.log("첫번째 case문");
    break;
  case 2:
    console.log("두번째");
    break;
  case 3:
    console.log("세번째");
    break;
  default:
    console.log("끝");

    break;
}

// while 반복문 무한히 돌아간다.
// while('값이 true면 무한으로 돌아간다. false값으로 변경해주어야 반복문이 멈춘다.')
// break문으로 반복을 종료시켜줄 수 있다.
// while (true) {
//   if ("멈추는조건") {
//     break; //조건이 맞을 때 반복을 끝내준다.
//   }
// }

// let num=1;
// while(num !== 5){
//     console.log(num);
//     num++;
// }
let num2 = 1;
while (true) {
  console.log(num2);
  num2++;
  if (num2 === 5) {
    break;
  }
}

// 사용자가 브라우저에 값을 간단히 입력 받을 수 있는 상태창을 띄워준다..
// prompt 간단한 입력값을 받아올 수 있다.

// let inputNum = prompt("첫번째 숫자입력");
// let inputNum2 = prompt("두번째 숫자입력");

// 두 변수는 문자열이다.. 흑흑 ㅠ
// 형변환을 통해 숫자로 변환시켜줘야 한다.
// parseInt('숫자로 변경할 변수나 값')
// Number('똑같다..숫자로 변경할 변수나 값')
// 다른 형태의 type을 number type으로 형변환 시켜준다.

// let result = parseInt(inputNum) + Number(inputNum2);

// console.log(`결과는:${result}`);

// let value = prompt("너는 숫자를 입력해야해 1~5 사이의 숫자를!");
// let play = true;

// while (play) {
//   switch (value) {
//     case "1":
//       console.log("1번 눌렀네 집에가");
//       play = false;
//       break;
//     case "2":
//       console.log("2번 눌렀네 점심 먹으러 가");
//       play = false;
//       break;

//     case "3":
//       console.log("3번 눌렀네 코딩 하러 가");
//       play = false;
//       break;

//     case "4":
//       console.log("4번 눌렀네 ㅎㅎ");
//       play = false;
//       break;

//     case "5":
//       console.log("5번 눌렀네 아무일도 없다.");
//       play = false;
//       break;

//     default:
//       value = prompt("1~5번 누르라고");
//       break;
//   }
// }
// 어렵다. 연습해야겠다. ....모두가 거쳐가는 연습
// 가위 바위 보...
// 3개 중에 선택을 할수가 있는데... 컴퓨터는 자동 선택 어떻게?

// 자스에서 랜덤값을 구할 수 있는 친구
//0~1까지
// parseInt()로 정수 변환 변환 후 너무 수가 작으니 원하는 범위 만큼 곱하자

let com_num;
let comSecondNum;
let user_num;
let userSecondNum;
let result = true;
let score = 0;
let firstMoney = 20000;
let battingMoney = 0;
let count = 0;
let result2 = true;
let whoFirst = "";
while (count <= 20 && firstMoney !== 0) {
  com_num = parseInt(Math.random()*3);
  console.log(com_num);
  //   parseInt를 연습하기위해 변환
  switch (com_num) {
    case 0:
      com_num = "가위";
      break;
    case 1:
      com_num = "바위";

      break;
    case 2:
      com_num = "보";

      break;

    default:
      break;
  }
  // 유저가 내는것
  battingMoney = prompt("2천원이상! 배팅금액을 입력해 주세요!");
  if (battingMoney < 2000) {
    alert("상남자 특)2000원 이상 배팅함");
    continue;
  } else {
    user_num = prompt("가위,바위,보 중 하나를 입력하세요 ㅎㅎ");
    // 2천원 이상 배팅 했을시 시작
    switch (user_num) {
      // 맨 처름 가위
      case "가위":
        switch (com_num) {
          case "가위":
            alert("비겼습니다!");
            break;
          case "바위":
            // 선공권 컴퓨터
            alert("컴퓨터가 바위를 냈군요! 패배,컴퓨터가 선공을 가져갑니다");

            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);

            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "com";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count += 1;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;
                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;
                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            break;
          case "보":
            alert("컴퓨터가 보를 냈군요! 승리! 당신이 선공권을 가져갑니다!");
            // 선공권 유저 시작
            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);
            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "user";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;
                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;
                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            //  여기까지 묵찌빠
            break;

          default:
            break;
        }
        break;
      // 맨 처음 바위
      case "바위":
        switch (com_num) {
          case "가위":
            // 선공권 유저 시작
            alert("컴퓨터가 가위를 냈군요! 승리! 당신이 선공권을 가져갑니다!");
            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);
            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "user";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;
                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;

                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            //  여기까지 묵찌빠
            break;
          case "바위":
            alert("비겼습니다!");

            break;
          case "보":
            // 선공권 컴퓨터 시작
            alert("컴퓨터가 보를 냈군요! 패배,컴퓨터가 선공을 가져갑니다");

            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);
            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "com";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;

                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;

                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            //  여기까지 묵찌빠
            break;

          default:
            break;
        }

        break;
      // 맨 처음 보
      case "보":
        switch (com_num) {
          case "가위":
            // 선공권 컴퓨터 시작
            alert("컴퓨터가 가위를 냈군요! 패배,컴퓨터가 선공을 가져갑니다");

            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);
            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "com";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;

                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                      } else {
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;

                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            //  여기까지 묵찌빠
            break;
          case "바위":
            alert("컴퓨터가 가위를 냈군요! 승리! 당신이 선공권을 가져갑니다!");

            // 선공권 유저 시작
            //   묵찌빠 시작
            comSecondNum = parseInt(Math.random()*3);
            switch (comSecondNum) {
              case 0:
                comSecondNum = "가위";
                break;
              case 1:
                comSecondNum = "바위";

                break;
              case 2:
                comSecondNum = "보";

                break;

              default:
                break;
            }
            result2 = true;
            whoFirst = "user";
            while (result2) {
              userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
              // 묵찌빠 결과창!
              switch (userSecondNum) {
                case "찌":
                  switch (comSecondNum) {
                    case "가위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 가위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;

                    default:
                      break;
                  }
                  break;

                case "묵":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "바위":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 바위를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }
                      break;
                    case "보":
                      alert(
                        "컴퓨터가 보를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;

                    default:
                      break;
                  }
                  break;

                case "빠":
                  switch (comSecondNum) {
                    case "가위":
                      alert(
                        "컴퓨터가 가위를 내서 졌습니다. 선공권을 컴퓨터가 가져갑니다."
                      );
                      whoFirst = "com";
                      break;
                    case "바위":
                      alert(
                        "컴퓨터가 바위를 내서 이기셨습니다! 선공권을 당신이 가져갑니다."
                      );
                      whoFirst = "user";
                      break;
                    case "보":
                      if (whoFirst === "com") {
                        firstMoney -= battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 패배!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      } else {
                        firstMoney += battingMoney * 2;
                        result2 = false;
                        count++;
                        alert(
                          `컴퓨터가 보를 냈습니다. 승리!${
                            20 - count
                          }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
                        );
                      }

                      break;

                    default:
                      break;
                  }
                  break;
              }
            }
            //  여기까지 묵찌빠
            break;
          case "보":
            alert("비겼습니다!");

            break;

          default:
            break;
        }

        break;

      default:
        alert("가위,바위,보 중 하나를 정확하게 입력해 주세요!");

        break;
    }
  }
}
