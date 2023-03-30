//예외 처리문

//try-catch문 코드 실행중 예외상황이 발생해도 프로그램이 종료가 되지않고
// 프로그램을 유지할 수 있다.

// try-catch
// 프로그램의 안정성을 높일 수 있다.
try {
  // 오류가 발생할것 같은 코드
} catch (error) {
  // 오류가 발생했을 때
  //오류의 메세지
}
try {
  if (5 === 5) throw "Err";
  // throw 에러 메세지를 던질 수 있다.
} catch (error) {
  console.log(error);
}

function myStr(params) {
  let devValue = document.querySelector(".dev").value;
  try {
    if (devValue == "") {
      throw "비었음";
    }
    devValue = parseInt(devValue);
    // Number()숫자로 타입 변경 함수
    console.log(typeof devValue);
    console.log(isNaN(devValue));
    //타입은 number지만 문자열은 숫자로 바꿀 수 없어 NaN이 됨, 즉 true
    if (isNaN(devValue)) throw "숫자가 아님";
    // 문자열이 들어가면 문자가 숫자로 변환될 수 없어서
    //number가 아니다.

    //오류가 발생해도 프로그램이 종료가 안된다.
  } catch (error) {
    // 코드를 실행하다 err발생
    // catch문 실행하고 오류의 내용은
    // err매개변수에 들어온다.
    console.log(typeof devValue);
    console.log(devValue);
    document.querySelector(".message").innerHTML = error;
  }
}
