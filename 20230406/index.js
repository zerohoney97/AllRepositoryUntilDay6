// 이터러블 이터레이터

//Set,Map
// set은 배열에 중복되지 않는 값을 저장할 수 있다.
// 중복되지 않는 유일한 값들
// 배열에는 중복값이 저장될 수 있는데 set은 중복이 안되는 값을 저장할 수 있다.

// 배열은 요소에 순서에 의미가 있는데 set X
// 배열은 인덱스로 접근을 하는데 set은 접근이 안된다.

// Set:ES6값으로만 이루어져 있고 중복값은 허용하지 않는다.

// Set

const s = new Set();

// 요소를 추가하는 방법

// 메소드 사용해서
s.add("one");
s.add("one");
// 중복값은 허용하지 않는다.
s.add("two");
s.add("three");
console.log(s);

const arr = [1, 2, 3, 4, 5];
// 생성단계에서 생성자 함수에 전달, 배열을
const ss = new Set(arr);
console.log(ss);

//has 값을 가지고 있는지 확인하는 메소드
console.log(ss.has(2));
// 요소를 제거하는 메소드
ss.delete(2);
console.log(ss);

// 값을 제거 모든 값을 제거하는 메소드
// ss.clear()

// forEach는 이터러블 반복자.
ss.forEach((i) => {
  console.log(i);
});
// SetIterator 객체로 반환
// 이터러블, 이터레이터 반환
const temp = ss.entries();
console.log(temp.next().value);

// Map은 key와 value를 저장.
// key값을 객체로도 저장할 수 있다.
// Map:ES6부터 추가됐다. 키와 밸류흫 한쌍으로
// 저장하고 중복된 키값을 허용하지 않는다.
// iterator를 통해 Map객체 내부를 순회할 수 있다.

// Map

const map = new Map();
//값을 추가
// Map은 값을 추가할 때 키와 같이 한 쌍으로 추가를 해줘야 한다.

//set 메소드를 통해 키와 값을 저장
// 중복되는 키를 허용하지 않는다.
// 마지막으로 저장된 value를 적용
map.set("one", 1);
map.set("one", 2);
map.set("two", 2);
console.log(map);

//키를 왜 지정할까 , key로 저장된 값을 호출하기 위해.

// map은 get이라는 메소드로 값을 호출할 수 있다.

console.log(map.get("one"));

// 삭제
// delete메소드는 삭제할 해당 키값을 매개변수로 전달.
// map.delete("one");
console.log(map);

// 사이즈 확인 map에 저장된 요소가 몇개인지?
// map 저장된 요소의 갯수를 확인할 수 있다.
console.log(map.size);

// map애 저장된 키들을 반환해주는 메소드
const keys = map.keys();
console.log(keys);
// map애 저장된 밸류들을 반환해주는 메소드
const values = map.values();
console.log(values);

// entries():[키,값]혀앹의 정보들을 모아서 MapIterator 객체로 변환 반환.
const iter = map.entries();
console.log(iter);

// console.log(iter.next().value);
// console.log(iter.next().value);

// key정보만 출력 for of문으로 작성해보자

for (const i of keys) {
  // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
  console.log(i);
}

// 값만 보여주자
for (const i of values) {
  // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
  console.log(i);
}

// 키랑 값을 다 출력
for (const [key, value] of map) {
  console.log(`키는${key} 밸류는${value}`);
}

// 키와 값 호출
map.forEach((value, key,) => {
  console.log(`키는${key} 밸류는${value}`);
});
