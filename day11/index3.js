//로또 추첨기 만들어보자.

// 로또 추첨기계

// 로또 번호들이 들어갈 로또 박스
let lottoNum = [];
let userLottoNum = [];
let res = [];

// 1.로또는 겹치는 숫자가 없어야 하고
// 2.숫자가 6개
// 3.나온 숫자들의 결과를 보여주자

// 추첨전에 세팅작업
function lottoInit() {
  // 배열에 값을 추가 할 때 초기화를 해야하는지 확인을 하고 진행해야한다.
  lottoNum = [];
  // 로또의 번호를 모두 뽑아놓고 가져다 사용하자.
  // 1~45번까지 반복 시키자.
  for (let i = 1; i <= 45; i++) {
    // 1~45번까지 숫자를 배열에 담아주고
    lottoNum.push(i);
  }
  console.log(`init함수 실행 세팅 끝!:${lottoNum}`);
  // 체크하면서 만들어야 버그가 어디서났는지 바로바로 해결하기 쉽다.
}
const result = (lottoNum, userLottoNum) => {
  let count = 0;
  lottoNum.forEach((element) => {
    if (userLottoNum.indexOf(element) !== -1) {
      count++;
    }
  });
  console.log(`6개중에 ${count}만큼 맞췄습니다. 그냥 일해서 돈 벌자`);
};

// 로또 추첨 실행함수
function lottoPlay() {
  res = [];
  // 추첨하는곳
  for (let i = 0; i < 6; i++) {
    // 값이 만약에 5.7=>5로 만들어준다, 버림. 메모
    //   0부터 44번까지 랜덤 숫자를 뽑고 인덱스로 사용해야겠다.
    let randomIndex = Math.floor(Math.random() * lottoNum.length);

    //   랜덤으로 뽑은 인덱스를 가지고 lottoNum배열에 인덱스로 전달해서
    // number라는 변수에 담아놓자

    let number = lottoNum[randomIndex];
    // 랜덤한 값이 또 나오지 않게 하기 위해서.
    // 배열에서 값을 제거하려며 어떻게 해야할까?
    // 배열의 메소드 splice함수를 사용하면 된다.
    // 시작점(인덱스),그 시작점으로 부터 몇개를 제거할 것인지
    // 매개변수로 전달.
    lottoNum.splice(randomIndex, 1);
    // 인덱스에 해당하는 값 하나만 제거
    //해당배열에서 값이 제거되면 길이가 줄어들기 때문에
    // 랜덤값을 구하는 과정에서도 lottoNum.length길이 값이 줄어들기 때문에
    // 정상적으로 작동 될 수 있다.

    // 결과값 담아두자
    res.push(number);
  }
  console.log("로또의 결과는?" + res);
  result(res, userLottoNum);
}

const userLotto = () => {
  userLottoNum = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * lottoNum.length);
    if (userLottoNum.indexOf(number) !== -1) {
      i++;
    } else {
      userLottoNum.push(number);
    }
  }
  console.log(`당신이 뽑은 숫자는${userLottoNum}입니다!`);
};

function main() {
  lottoInit();

  userLotto();

  lottoPlay();
  //   함수 초기화나 play같은 위의 코드처럼 단위별로 기능을 정리해 두었을 때
  //  단위테스트가 가능하다.
  // 단위별로 버그가 없는 지 테스트 해볼 수 있다.
  // 단위별 기능 오휴가 없게 되면 통합테스트를 진행 전체적 기능이 오류가 없느닞
  //   테스트 진핼 할 수 있다.

  //  전체 기능이 들어있는 함수를 만들고 함수가 실행될 때마다
  // 해당 기능이 동작할 수 있게 재사용성을 높힐 수 있다.
}

// 이렇게 단위 통합으로 작업을 정리해두는 습관을 길러야한다.

let a = [1, 2, 3, 4];

console.log(
  a.reduce((total, num) => {
    console.log(total);
    return total - num;
  })
);
