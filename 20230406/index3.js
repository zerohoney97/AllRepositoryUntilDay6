// 전달된 매개변수가 없으면 open에 디폴트로 false값이 들어간다.
// 매개변수의 디폴트 값 생성
function Drawer(el, open = false) {
  this.el = el;
  this.isOpen = open;
  //  객체의 원형에 assign메소드는 하나 이상의 객체로 부터
  // 대상 객체로 속성을 복사할 때 사용한다.
  // 두번째 매개변수는 객체의 속성을 복사해서 객체에
  // 속성을 추가한 뒤 첫번째 매개변수의 객체를 반환한다.
  // 다른 객체의 속성을 복사해서 새로운 객체를 생성한다.
  Object.assign(this.el.style, {
    display: "block",
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "500px",
    padding: "10px",
    backgroundColor: "yellow",
    transition: "1s",
  });
}

Drawer.prototype.open = function () {
  this.isOpen = true;
  this.el.style.transform = "translate(910px)";
};

Drawer.prototype.close = function () {
  this.isOpen = false;
  this.el.style.transform = "translate(1410px)";
};
const slideMenu=new Drawer(document.querySelector('.drawer'));
slideMenu.close()

document.querySelector('#drawer-opner').onclick=function(){
    // if (!slideMenu.isOpen) {
    //     slideMenu.open();
    // }else slideMenu.close()
    console.log(slideMenu.el);

}