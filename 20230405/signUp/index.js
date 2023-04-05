let signUpBtn = document.querySelector(".sign-up");

signUpBtn.onclick = () => {
  let userId = document.querySelector(".user-id").value;
  let userPw = document.querySelector(".user-pw").value;
  console.log("이메일 맞니", isEmail(userId));
  console.log("비번 맞니", isEmail(userPw));
  if (!isEmail(userId) || !isPassword(userPw)) {
    document.querySelector(".text").innerHTML = "아이디 비번확인";
  } else {
    document.querySelector(".text").innerHTML = "성공";
  }
};

function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 정규식 형식이 맞으면 test메소드로 검사해서 true 아니면 false 반환
  return regExp.test(asValue);
}

function isPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  // 정규식 형식이 맞으면 test메소드로 검사해서 true 아니면 false 반환

  return regExp.test(asValue);
}

const arr = [1, 2, 3];
let tempArr = arr[Symbol.iterator]();
console.log(tempArr);

let temp = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(temp[Symbol.iterator]());

