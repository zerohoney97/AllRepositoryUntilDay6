//promise 객체
// 비동기 처리를 가능하게 해주는 객체

//node.js 사용을 많이 할건데

function testPromise(num) {
  // new 키워드로 빈 객체를 만들고
  // promise객체를 생성
  // 전달하는 함수값에 resolve,reject 두가지 매개변수를 받는데
  // resolve() 함수이고 처리가 완료되면 반환
  // reject() 함수이고 처리가 오류나면 반환
  return new Promise(function (resolve, reject) {
    try {
      if (num > 10) reject({ date: "숫자큼" });
      console.log(num);
      // 데이터를 받아온다 가정을 하자.
      // 데이터를 가져오는 시간이 좀 걸리는데
      // 데이터를 다 가져오고 작업을 진행시켜야 할 때.
      setTimeout(() => {
        resolve(num );
      }, num * 1000);
    } catch (error) {
      reject(error);
    }
  });
}

testPromise(8)
  .then((data) => {
    //데이터를 가져오고 처리할 구문을 여기에 작성하면 된다.
    // 데이터를 가지고 처리해야할 작업
    console.log(data);
    return testPromise(data);
    //   resolve 실행하면 then
    // reject를 실행하면 catch
  })
  .catch(function (err) {
    console.log(err);
  });

//   then,catch싫으면
// 같이써도 작업은 되지만 안 좋은 버릇이니까 같이 사용하지 말자!
// async,await 구문

async function asyncFun(params) {
  try {
    // await 뒤에 promise 객체
    let temp = await testPromise(5);
    // 기다리고 promise객체나 res나 rej이 처리될 때 까지 

    console.log(1);
    temp=await testPromise(temp);
    console.log(temp)
    // await+promise=promise를 기다리고 resolve 값을 반환한다.
    // async,await 는 짝이다.
    // 같이 붙어다닌다.
  } catch (err) {}
}


asyncFun()
