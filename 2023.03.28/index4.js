// 클래스의 이름으로 사용하고 결과에서도 사용할 가위 바위 보를 담은 문자열 배열
// 만들자
let gameArr = ["scissor", "paper", "rock"];

let playerBtns = document.querySelectorAll(".player-btn");
// player 화면 선택한 결과를 보여줄 태그
let playerSelect = document.querySelector(".player-select");
// 묵찌빠 진행여부
let nextGame = false;
// 누가 공격?
let whoHasAttack = "";
// 컴퓨터의 결과를 보여줄 태그
// 게임이 진행중일 경우
let onGoing = false;
// 난이도를 선택했는지 여부
let isSelectDifficulty = false;
function playerFunction(money) {
  this.money = money;
}
function comFunction(money) {
  this.money = money;
}
let player;
let computer;
let difficultyBtn = document.querySelectorAll(".difficulty-btn");
let difficultyText = document.querySelector(".difficulty-text");

function gameEvent(a) {
  // player 화면 선택한 가위나 바위 보 이미지를 보여주는 화면
  //   클래스 추가하되 player-select 클래스 유지하고 새로운 클래스 추가
  playerSelect.className = "player-select " + a;
  let { value, text } = gameStart(a);
  document.querySelector(".result").innerHTML = value;
  //   내용
  document.querySelector(".subResult").innerHTML = text;
}

// 게임의 시작지점
function init() {
  gameArr.forEach((a, index) => {
    // "scissor", "paper", "rock" 순서대로 item에 담기며
    // index = 0,1,2 순서대로
    playerBtns[index].addEventListener("click", () => {
      if (isSelectDifficulty) {
        gameEvent(a);
      } else {
        document.querySelector(".cutomized-alert").innerHTML =
          ' <div class="alert alert-warning" role="alert">난이도를 먼저 선택해 주세요!</div> ';
      }
    });
  });
}

function gameStart(a) {
  if (nextGame) {
    return gameStart2(a);
  } else {
    // 랜덤값으로 gameArr배열 안에 가위 바위 보를 가져오자
    let comSelect = gameArr[Math.floor(Math.random() * gameArr.length)];
    document.querySelector(".com-select").className = "com-select " + comSelect;
    // 무승부 거르고 시작
    if (a == comSelect) {
      return { value: "무승부", text: "리트" };
    } else if (
      (a == "rock" && comSelect == "scissor") ||
      (a == "paper" && comSelect == "rock") ||
      (a == "scissor" && comSelect == "paper")
    ) {
      whoHasAttack = "player";
      nextGame = true;
      // 여기서 이기는 조건을 만들어 보자.
      return { value: "승리", text: "묵찌빠 시작! 당신이 선공" };
    } else {
      // 패배조건
      whoHasAttack = "com";
      nextGame = true;
      return { value: "패배", text: "묵찌빠 시작! 당신은 후공!" };
    }
  }
}

function gameStart2(a) {
  // 랜덤값으로 gameArr배열 안에 가위 바위 보를 가져오자
  let comSelect = gameArr[Math.floor(Math.random() * gameArr.length)];
  let comMoney = Math.floor(Math.random() * 1000 + 2000);
  document.querySelector(".com-select").className = "com-select " + comSelect;
  // 무승부 거르고 시작
  if (a == comSelect) {
    if (whoHasAttack == "player") {
      player.money += comMoney;
      computer.money -= comMoney;
      validateGameover(player.money, computer.money);
      nextGame = false;
      difficultyText.innerHTML = `현재 자금은${player.money}이고 컴퓨터의 자금은${computer.money}입니다!`;
      return { value: "최종승리!", text: "ㅊㅊ" };
    } else if (whoHasAttack == "com") {
      player.money -= comMoney;
      computer.money += comMoney;
      validateGameover(player.money, computer.money);
      nextGame = false;

      difficultyText.innerHTML = `현재 자금은${player.money}이고 컴퓨터의 자금은${computer.money}입니다!`;
      return { value: "패배", text: "ㅠㅠ" };
    }
  } else if (
    (a == "rock" && comSelect == "scissor") ||
    (a == "paper" && comSelect == "rock") ||
    (a == "scissor" && comSelect == "paper")
  ) {
    whoHasAttack = "player";
    nextGame = true;
    // 여기서 이기는 조건을 만들어 보자.
    return { value: "당신이 선공입니다!", text: "ㅊㅊ" };
  } else {
    // 패배조건
    whoHasAttack = "com";
    nextGame = true;
    return { value: "컴퓨터가 선공입니다!", text: "흑흑 너무 슬프다..." };
  }
}

function validateGameover(p, c) {
  if (p <= 0) {
    alert("패배");
    window.location.reload();
  } else if (c <= 0) {
    alert("승리!");
    window.location.reload();
  } else {
    return;
  }
}

const selectDifficultyFunc = () => {
  difficultyBtn[0].addEventListener("click", () => {
    changeStatus(100000);
  });
  difficultyBtn[1].addEventListener("click", () => {
    changeStatus(50000);
  });
  difficultyBtn[2].addEventListener("click", () => {
    changeStatus(10000);
  });
};

const changeStatus = (budget) => {
  player = new playerFunction(budget);
  computer = new comFunction(budget);
  difficultyText.innerHTML = `쉬움 입니다! 현재 자금은${player.money}이고 컴퓨터의 자금은${computer.money}입니다!`;
  document.querySelector(".what-difficulty").style.display = "none";
  document.querySelector(".cutomized-alert").innerHTML = "";

  isSelectDifficulty = true;
};

init();
selectDifficultyFunc();
