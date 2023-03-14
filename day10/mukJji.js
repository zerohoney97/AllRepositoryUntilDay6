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

// 결과를 알려주는 함수(묵찌빠 한정)
const resultTextFunc = (
  comCard,
  userCard,
  vicroryResult,
  isDone,
  attackAccess
) => {
  if (isDone) {
    alert(
      `컴퓨터가 ${comCard}를 냈고, 당신이 ${userCard}를 냈습니다. ${vicroryResult}!${
        20 - count
      }판에 ${firstMoney}남았습니다!(도박중독은 인생을 파멸로 이끕니다.) `
    );
  } else {
    attackAccess === "use"
      ? alert(
          `선공권: 당신! |||| 컴퓨터가 ${comCard}을(를)냈고, 당신이 ${userCard}을(를) 냈습니다. ${vicroryResult}!${attackAccess}이(가) 선공권을 가져갑니다. `
        )
      : alert(
          `선공권:알파고! ||||| 컴퓨터가 ${comCard}을(를)냈고, 당신이 ${userCard}을(를) 냈습니다. ${vicroryResult}!${attackAccess}이(가) 선공권을 가져갑니다. `
        );
  }
};

// 묵찌빠 함수
const mukJjiBba = (whoFirst, result2) => {
  while (result2) {
    //컴퓨터 묵찌빠 랜덤생성
    comSecondNum = parseInt(Math.random() * 3);
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

    userSecondNum = prompt("묵찌빠 입니다. 묵,찌,빠를 입력해주세요!");
    // 묵찌빠 결과창!
    switch (userSecondNum) {
      case "찌":
        switch (comSecondNum) {
          case "가위":
            if (whoFirst === "com") {
              firstMoney -= battingMoney * 2;
              count++;
              resultTextFunc("찌", "찌", "패배", true);
            } else {
              firstMoney += battingMoney * 2;
              count++;
              resultTextFunc("찌", "찌", "승리", true);
            }
            result2 = false;
            break;
          case "바위":
            resultTextFunc("묵", "찌", "패배", false, "컴퓨터");
            whoFirst = "com";
            break;
          case "보":
            resultTextFunc("빠", "찌", "승리", false, "당신");

            whoFirst = "user";
            break;

          default:
            break;
        }
        break;

      case "묵":
        switch (comSecondNum) {
          case "가위":
            resultTextFunc("찌", "묵", "승리", false, "당신");

            whoFirst = "user";
            break;
          case "바위":
            if (whoFirst === "com") {
              firstMoney -= battingMoney * 2;
              count++;
              resultTextFunc("묵", "묵", "패배", true);
            } else {
              firstMoney += battingMoney * 2;
              count++;
              resultTextFunc("묵", "묵", "승리", true);
            }
            result2 = false;
            break;
          case "보":
            resultTextFunc("빠", "묵", "패배", false, "컴퓨터");

            whoFirst = "com";
            break;

          default:
            break;
        }
        break;

      case "빠":
        switch (comSecondNum) {
          case "가위":
            resultTextFunc("찌", "빠", "패배", false, "컴퓨터");

            whoFirst = "com";
            break;
          case "바위":
            resultTextFunc("묵", "빠", "승리", false, "당신");

            whoFirst = "user";
            break;
          case "보":
            if (whoFirst === "com") {
              firstMoney -= battingMoney * 2;
              count++;
              resultTextFunc("빠", "빠", "패배", true);
            } else {
              firstMoney += battingMoney * 2;
              count++;
              resultTextFunc("빠", "빠", "승리", true);
            }
            result2 = false;
            break;

          default:
            break;
        }
        break;
    }
  }
};

// 메인 함수
const main = () => {
  while (count <= 20 && firstMoney !== 0) {
    com_num = parseInt(Math.random() * 3);
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
    } else if (battingMoney > firstMoney) {
      alert("마이너스 통장은 안됩니다 ㅎㅎ");
      continue;
    }

    user_num = prompt("가위,바위,보 중 하나를 입력하세요 ㅎㅎ");
    // 2천원 이상 배팅 했을시 시작
    switch (user_num) {
      // 맨 처름 가위
      case "가위":
        switch (com_num) {
          case "가위":
            alert("비겼습니다!");
            continue;
            break;
          case "바위":
            // 선공권 컴퓨터
            alert("컴퓨터가 바위를 냈군요! 패배,컴퓨터가 선공을 가져갑니다");
            mukJjiBba("com", true);
            break;
          case "보":
            alert("컴퓨터가 보를 냈군요! 승리! 당신이 선공권을 가져갑니다!");
            mukJjiBba("use", true);

            // 선공권 유저 시작
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
            mukJjiBba("use", true);

            break;
          case "바위":
            alert("비겼습니다!");
            continue;

            break;
          case "보":
            // 선공권 컴퓨터 시작
            alert("컴퓨터가 보를 냈군요! 패배,컴퓨터가 선공을 가져갑니다");
            mukJjiBba("com", true);

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
            mukJjiBba("com", true);

            break;
          case "바위":
            alert("컴퓨터가 가위를 냈군요! 승리! 당신이 선공권을 가져갑니다!");
            mukJjiBba("use", true);

            // 선공권 유저 시작

            break;
          case "보":
            alert("비겼습니다!");
            continue;
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
};

// 메인 함수 시작
main();

