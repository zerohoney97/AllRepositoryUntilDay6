-- 데이터 베이스
-- 데이터를 저장하는 공간으로 보면된다.

-- sql 명령어를 사용해서 
-- 구현된 기능을 실행시키기 위해 사용하는 특정한 언어이다.
-- 데이터를 보관하거나 저장하거나 삭제 또는 수정을 할 수 있다.

--관계형 데이터 베이스
-- mysql
-- oracle
--mariaDB

-- 비관계형 데이터 베이스
-- mongoDB


--CLI로 mysql에 접속 방법
--mysql -u root -p
-- 비밀번호 입력

--show databases
--스키마 전부 확인

--sql문은
--데이터 정의어(DDL)
--데이터 조작어(DML)
--데이터 제어어(DCL)

--데이터 정의어
--CREATE
-- SHOW
-- DROP
-- ALTER

-- 데이터베이스 만들어 보자
CREATE DATABASE testMysql;

-- 데이터베이스들 확인하는 명려어
SHOW DATABASES;

-- 데이터 베이스를 삭제하는 명령어
DROP DATABASE testMysql;

-- 사용할 데이터 베이스 지정
USE testMysql;

-- 데이터베이스 안에 있는 테이블 확인
SHOW TABLES;

-- 테이블 생성
-- 테이블에 PRIMARY KEY: 고유키는 한개만 들어갈 수 있고 중복이 되지않는 값.
CREATE TABLE store(id INT AUTO_INCREMENT PRIMARY KEY,tel VARCHAR(20));
CREATE TABLE store2(id INT AUTO_INCREMENT PRIMARY KEY,tel VARCHAR(20));

-- 테이블에서 필드명과 타입을 확인할 수 있는 명령
DESC store;

-- 데이터 타입
-- 숫자형,문자형,날짜형,이진 데이타 타입

-- 숫자형
-- INT:4byte -21억

-- 문자형
-- VARCHAR:255byte:가변 데이터(우리가 선언한 범위보다 작으면 자기가 알아서 맞춰줌)
-- CHAR: 255byte:고정데이터(우리가 선언한 범위를 다 먹는다)
-- TEXT:65535byte

-- 날짜형
-- DATE:년 월 일
-- TIME:시간
-- DATETIME:년 월 일 시간(YYYY-MM-DD-HH:MM:SS)
-- TIMESTAMP:년 월 일 시간(INTEGER) 4byte

-- 이진 데이터 타입
-- BLOB:이미지

--KEY
-- PRIMARY KEY:중복 입력 안됨x 테이블에 하나만 넣을 수 있다. null값도 안됨(고유키)
-- UNIQUE:중복 입력 불가인데 키를 여러개 줄 수 있다.null값도 됨.

CREATE TABLE user(user_id VARCHAR(20) PRIMARY KEY,user_pw VARCHAR(20) NOT NULL,user_name VARCHAR(20) NOT NULL,
-- 따로 값을 추가하지 않으면 DEFAULT 값이 들어감
gender CHAR(4) DEFAULT '남자',
-- now()는 현재시간을 만들어주는 함수
date DATETIME DEFAULT  now());

DESC user;

-- 데이터 조작어
-- SELECT 
-- INSERT
-- UPDATE
-- DELETE

-- 테이블에 값을 추가
INSERT INTO user(user_id,user_pw,user_name,gender) VALUES('asd1','dsa','mumu','남자');

SELECT * FROM user;

INSERT INTO user(user_pw,user_name) VALUES('123','zero');

-- 테이블 열 검색
-- WHERE 문으로 테이블을 조회해서 해당 필드가 userid2인 값을 찾아서 조회
SELECT * FROM user WHERE user_id='asd1';
SELECT * FROM user WHERE gender='남자';

-- 테이블 열 수정
-- SET 해당값을 수정할 때 사용
-- UPDATE문과 짝으로 사용한다.
UPDATE user SET gender='여자'  WHERE user_id='asd1';
UPDATE user SET user_pw='000',user_name='none',gender='남자' WHERE user_id='asd1';

-- 테이블 삭제
DELETE FROM user WHERE user_id='asd1';

-- 게시판 테이블 한 번 만들기
-- 이름은 board
--컬럼은 id,content,writer,date,likes
-- id=int 11자 자동으로 증가 고유키
-- content TEXT 타입 null이어도 추가 가능하게
-- writer VARCHAR 40자 null이면 안되게
-- likes int 11자 기본값 0
-- row를 6개 추가하기

CREATE TABLE board (id INT(11) AUTO_INCREMENT PRIMARY KEY ,content TEXT,writer VARCHAR(40) NOT NULL,likes INT(11) DEFAULT 0);

SELECT * FROM board;

INSERT INTO board (content,writer) VALUES('안녕','난 작성자');
INSERT INTO board (content,writer) VALUES('첫 글ㅋㅋㅋ ','운영자');
INSERT INTO board (content,writer) VALUES('닉 언 벤입니다.','반장');
INSERT INTO board (content,writer) VALUES('근데이제뭐함?','소신발언');
INSERT INTO board (content,writer) VALUES('난 한마리의 야생동물','경주마');
INSERT INTO board (content,writer) VALUES('트위터 차기 ceo는 시바견입니다.','일론머스크');

-- 정리할게요
-- mysql -u root -p :CLI환경에서 mysql 접속
-- create database [database이름]:데이터베이스 생성(엑셀 파일 생성 같은 의미)
-- drop databse [database이름]:데이터 베이스 삭제
-- create table [테이블 이름]([필드명 데이터 타입],[필드면 데이터 타입]...):table 생성
-- show databases : 모든 데이터 베이스 조회
-- show tables: 모든 테이블 조회
-- use [database이름]:사용할 데이터 베이스 선택(엑셀파일 열기 같은 느낌)
-- desc [table이름]:table의 field를 한 줄로 확인(엑셀과 비교)
-- select [filed] FROM [database 이름]
-- delete from [table 이름] where [field]=[값] : 테이블에 필드가 ==값인 row를 삭제
-- select * from [table이름]:테이블 값을 전체 조회
-- insert into [table이름](field 1,field 2) values(값1,값2): 테이블에 값 추가 필드 1에 값1을 넣고 필드2에 값2를 넣는다.
-- update [테이블 이름] set [필드명] =[수정할 값] [필드명2]=[수정할 값 2] where [field]=[값] :테이블 명에서 필드명을 새로운 값으로 새로운 값과 새로운 값2로 바꾼다.
-- select * from [테이블 명] where [field] like '%aa':필드에서 해당되는 내용중 aa로 시작하는 데이터 조회
-- select * from [테이블 명] where [field] like 'aa%':필드에서 해당되는 내용중 aa끝나는 데이터 조회
-- alter table[기존 테이블 명] rename [새로운 테이블 이름]: 테이블 이름 바꾸기
-- alter table[기존 테이블 명] chage 기존 컬럼 이름][새로운 컬럼 이름][ type: 컬럼의 이름 바꾸기
-- alter table[기존 테이블 명] modify [컬럼 이름] type: 컬럼의 타입을 변경
-- alter table[table 이름] drop [field]:해당 필드를 테이블에서 제거한다.
-- alter table[table 이름] auto_increment=0:해당 테이블의 auto_increment를 초기화 시켜준다.
-- alter table[table 이름] add [field] type :해당 테이블 맨 뒤로 field를 추가한다.
-- alter table[table 이름] add [field] type first :해당 테이블 맨 앞으로 field를 추가한다.
-- select * from [table 이름] order by [field 이름] DESC(또는 ASC):필드를 내림차순(혹은 오름차순)으로 정렬
ALTER TABLE user2 MODIFY newcal CHAR(20);

ALTER TABLE user2 CHANGE user_pw newcal VARCHAR(20); 
ALTER TABLE user RENAME user2;
DESC user2;

-- SELECT id,likes FROM board;

CREATE Table user(
    id INt AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20));

CREATE Table post(
    id INt AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20));

ALTER Table post ADD COLUMN userId INT;
DESC post;

-- CONSTRAINT 오류가 났을 때 제약 조건 명령어(오류가 나면 확인하기 위해서)(임의로 지정 할 수 있다.)
-- FOREIGN KEY:참조키를 지정 userId
-- 참조할 테이블 지정
-- REFERENCES 참조키가 참조하는 테이블의 열을 지정
-- 참조할 테이블 지정 user
ALTER Table post ADD CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES user (id);

INSERT INTO user (name) VALUES('asdasd');

INSERT INTO post (title,userId) VALUES('3333',3);

-- INNER JOIN 테이블을 조회하는데 참조키를 가지고 관계가 맺어져있는 테이블 조회
SELECT * FROM user INNER JOIN post ON user.id=post.userId WHERE user.id=1;
SELECT user.id,post.title FROM user INNER JOIN post ON user.id=post.userId WHERE user.id=1;

-- 오늘 잠시 간단하게 만들어 볼 것.
-- 게시판 만들었는데 유저가 글을 등록하고
-- 해당 유저가 작성한 글을 볼 수 있는 페이지