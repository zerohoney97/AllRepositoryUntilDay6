const mysql2 = require("mysql2/promise");

// 우리가 전에 사용했던 createConnection 메서드는 콜백함수 기반이고
// promise를 반환 하지 않았어요
// createConnection:기본적인 연결을 해주는 메서드 테스트할 때 사용한다. 단일 클라이언트 접속에 용이

// 커넥션 풀을 생성하고 관리할 수 있는 메서드
// createPool 메서드로 연결을 관리 할 것.
// promise객체 반환
// 많은 클라이언트가 데이터베이스와 통신할 때
// 요청이 많이 들어와도 성능이 유지되고 여러개의 요청을 처리하는데 좋다.
// 쉽게 말해서 여러명이 동시에 요청해도 성능이 유지된다.

const mysql = mysql2.createPool({
  user: "root",
  password: "q1w2e3R$",
  multipleStatements: true,
  database:'test3'
});

// promise 반환한다.
mysql.getConnection((err,result)=>{
    // 연결이 정상적으로 x
    console.log(err);
    // 정상적으로 연결되면 result객체에 연결
})

module.exports = {mysql};
