// 우라가 만들어볼거 업다운 게임
// 숫자 맞추기
// 1.플레이어가 있고,컴퓨터가 있고
// 2.플레이어는 선택을 할 수 있게하고,컴퓨터는 랜덤값
// 3.플레이어가 선택할 수 있는 제어문
// 4.게임의 종료 시점을 정해야겠다.
let playerSelect;
let computerSelect = parseInt(Math.random() * 99);
let count = 0; //시도를 몇번 할 건지 플레이어가 선택할 수 있게.

let max = 100; //플렝이어가 선택이 가능한 최대의 숫자.

let min = 0; //플레이어가 선택이 가능한 최소의 숫자

let subText = ""; //컴퓨터가 알려줄 문구

let maxCount = parseInt(prompt("게임 몇번 할래?")); //게임횟수 이걸로

// 반복되어야 하므로
while (playerSelect !== computerSelect && count < maxCount) {
  // ES6에서 문자열을 사용할 때 편하게 사용할 수 잇는 기법
  // 템플릿 리터럴 문자를 다룰 때 줄바꿈 같은걸 편하게 사용할 수 있게 해준다.
  // `백틱 ${변수명}`
  // 문자를 작성할 때 \n줄내림을 해준다.
  playerSelect = prompt(
    `${subText} \n 숫자를 입력하세요 \n 최소:${min} | 최대 :${max} | 남은 횟수:${
      maxCount - count
    }`
  );

  //   playerSelect = parseInt(playerSelect);
  //   입력된 값이 숫자인지 확인? 문자쓰면 어떻게?
  // isNaN 숫자가 아닌 값을 입력했는지? 숫자 아니면 true
  if (isNaN(playerSelect)) {
    subText = "숫자 입력 하셈";
    continue; //이 줄부터 밑으로 읽지 않고 다시 반복문 시작점으로 돌아간다.
  }
  //   최소와 최대 사이의 값인지 확인
  if (min >= playerSelect || max <= playerSelect) {
    subText = `너 입력값 확인해 최소:${min} | 최대:${max}`;
    continue;
  }
  //   게임 로직 시작

  if (playerSelect > computerSelect) {
    // min최소 값을 다시 겹치지 않게 입력 해준다.
    max = playerSelect;
    subText = "다운!";
} else if (playerSelect < computerSelect) {
    // max최대값을 다시 겹치지 않게 입력 해준다.
    min = playerSelect;
    subText = "업!";
  } else {
    count += 1;
    console.log(`${count}번 신호해서 너 맞췄어 추카~`);
    // 게임 끝났음
    break;
  }
  //   게임 횟수 증가
  count++;
  if (count >= maxCount) {
    console.log("게임 오버 메롱");
  }
}

// 오늘의 숙제는 
// 1.가위바위보 게임을 20판 게임 시작하기전에 돈걸고 입력해서 거는데 2천원 이상으로 걸 수 있게 안 걸면 다시입력-> 배팅 금액 2만원 시작
// 2.가위바위보 이기면 묵찌빠 이기면 배팅금액의 *2, 지면 -배팅 금액 * 2
// 3.종료 조건 20판 끝나거나 돈 다 잃었을 때.
// 끝나면 소지금이랑 몇 판 했는지
