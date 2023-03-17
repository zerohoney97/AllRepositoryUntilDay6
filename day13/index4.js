// 팝업 열어주는 함수

function openPopup() {
  let popup = document.querySelector(".popup-wrap");
  // 디버깅 습관
  console.log(popup.classList);
  //   메모
  // popup.className=>문자열을 그대로 대입해주자
  // popup.classList=>자체 메소드를 사용해 추가해주자

  // popup.className 써보자
  // 클래스 구분을 줘야 하기때문에 ' is-active' 앞에 한깐 띄워줬다.
  // popup.className = popup.className + " is-active";

  //   popup.classList.add("is-active");
  //   와 메소드 편하네

  //   조건문으로 해보자 클래스가 있는지 확인 하고 있으면 붙히지 말고
  // 없으면 붙히자
  // popup.classList.contains('is-active')로 확인
  //   문자열 버전
  //   let stringArr = popup.className;
  //   if (stringArr.indexOf('is-active')!==-1) {
  //     // class 있으면
  //   } else {
  //     // class 없으면
  //     popup.className = popup.className + " is-active";
  //   }

  // 메소드 사용해서 조건 추가
  if (popup.classList.contains("is-active")) {
    popup.classList.remove("is-active");
  } else {
    popup.classList.add("is-active");
  }
}
