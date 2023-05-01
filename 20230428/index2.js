// mysql 설치를 미리 해둘게요~
// workbench 편하게 gui로 조작해서 추가가 가능하다.

// cli좀 작성을 해보고 넘어갑시다.

// mysql 접속을 해보자


// 쿼리문은 데이터베이스에 추가 수정 삭제를 할 수 있는 명령어
// 쿼리문을 사용하면 데이터베이스에서 원하는 데이터를 가져오기 위해서
// 사용하는 명령어다.

// 현재 있는 데이터 베이스들을 확인하는 쿼리문
// -----------------------------------
// show databases;

// 데이터 베이스를 추가 해주는 쿼리문
// ---------------------------------------------
// CREATE DATABASE (데이터베이스 이름) CHARACTER SET utf8;
// ---------------------------------------------

// 사용할 데이터 베이스 선택하는 쿼리문
// ---------------------------------------------
// use (database)
// ---------------------------------------------
// 테이블이라는 곳에 저장됨
// 유저의 테이블도 있을것이고
// 게시판에 대한 테이블이 있을 것이다.
// 이거는 유저의 내용만 담을 객체야.

// 테이블 추가
// //---------------------------------------------
// CREATE TABLE (database).(table)(
//     id INT NOT  AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(255) NOT NULL
// )

// CREATE TABLE zerohoney.user (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     column1 VARCHAR(255),
//     column2 INT
//  );
//  CREATE TABLE zerohoney.board(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(255) NOT NULL
// )

// 테이블 확인 쿼리문
// //---------------------------------------------
// SELECT * FROM (table)
// //---------------------------------------------

// 테이블에 내용을 추가해보지.
// INSERT INTO (데이터베이스).(테이블)(id',content') VALUES ('1','ㅎㅇㅎㅇ')