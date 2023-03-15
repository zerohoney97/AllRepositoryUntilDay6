let str='가나다라마바사';

// 문자열 함수를 알아보자
// 문자열은 배열 아니다.
// 하지만 인덱스로 값에 접근은 가능하다.

console.log(str.indexOf('가'))

// 문자열의 길이
console.log(str.length);

// 문자열 함수 slice 메모
// 문자열을 잘라주는 역할 한다.
// 시작점과 끝잠
console.log(str.slice(0,6))
// 문자열 함수 split =>공백이면 한 자씩 잘라냄
// 매개변수로 전달한 값을 잘라내고 배열의 형태로 변경해준다.
console.log(str.split(''))

//문자열이 영어
let str2='abcdefg';
let str3='ABCDEFG';
// 대문자
console.log(str2.toUpperCase());
// 소문자
console.log(str3.toLowerCase());
