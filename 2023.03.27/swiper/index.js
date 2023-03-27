// 클릭의 시작 위치를 가지고 있고
// 끝나면 끝난 좌표와 비굑를 해서
// 오른쪽을 스와이프 된건지
// 왼쪽으로 스와이프 된건지 부터 확인을 하고
// 인덱스를 기준으로 움직임을 제어해보자.

// 마우스 시작 클릭 지점 x좌표
let _start;
// 진행중인 인덱스
let _index = 2;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let swiperItem = document.querySelectorAll(".swiper-item");
let firstIndex = document.querySelector(".swiper-first-item");
let lastIndex = document.querySelector(".swiper-last-item");

let { length } = document.querySelectorAll(".swiper-item");
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");
firstIndex.style.display = "";

lastIndex.style.display = "none";

// getComputedStyle 적용된 스타일의 값을 가져올 수 있다.
// 적용된 스타일 가져올 태그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
_swiper.addEventListener("mousedown", (e) => {
  // console.log('클릭 시작');
  // 클릭했을 때 x좌표
  // 클릭한 x의 좌표
  // e.clientX;
  _swiperContent.style.transition = "1s";

  _start = e.clientX;
});

_swiper.addEventListener("mouseup", (e) => {
  if (e.clientX < _start - 50) {
    _index++;
    swiperMove();
  } else if (e.clientX > _start + 50) {
    _index--;
    swiperMove();
  }
});

// 인덱스를 기준으로 움직임
function swiperMove() {
  _swiperContent.style.left = -((_index - 1) * _swiperWidth) + "px";
}

_prev.addEventListener("click", () => {
  console.log(_index);

  _index--;
  swiperMove();
  _swiperContent.style.transition = "1s";
});

_next.addEventListener("click", () => {
  console.log(_index);
  _index++;
  swiperMove();
  _swiperContent.style.transition = "1s";
});

// 메모
_swiperContent.addEventListener("transitionend", () => {
  if (_index === length + 1) {
    lastIndex.style.display = "";
  } else if (_index === length + 2) {
    _index = 2;
    _swiperContent.style.transition = "0s";
    _swiperContent.style.left = "-500px";
  } else if (_index === 1) {
    _index = length + 1;
    _swiperContent.style.transition = "0s";
    _swiperContent.style.left = -(4 * _swiperWidth) + "px";
  }
});

_swiperContent.style.left = -(1 * _swiperWidth) + "px";