// 우리 배열 메소드 좀 더 사용해보자

// 배열메소드가 제일많이 사용됩니다.

// Array.of();전달된 인자를 요소로 가지는 배열을 만들어준다.
//배열을 생성할때 사용하는 메소드

const arr = Array.of(1, 2, 3, 4, 5, 6);
console.log(arr);

// 배열에 원본 배열을 수정하는 메소드
arr.push(2);
console.log(arr);

const result = arr.concat(5); //원본 배열 수정 ㄴㄴ 새로운 배열이 생기고 반환된다.
console.log(arr);
console.log(result);

// 레퍼런스 타입
console.log(arr === result);
let c = 5;
let d = 5;
// reference에 의한 참조
let a = [1, 2, 3];
// spread로 값만 복사!
let b = [...a];
console.log(c === d);
console.log(a === b);

const foods = ["apple", "orange"];

// foods 배열에서 banana가 있는지 확인
if (foods.indexOf("banana") === -1) {
  foods.push("banana");
}
console.log(foods);

//ES7에 도입 includes =>true 반환
//banana가 배열에 있으면 true 없으면 false
console.log(foods.includes("banana"));

// 있는지 없는지 확인할 때 사용하면 좋겠다.
if (!foods.includes("banana")) {
  foods.push("banana");
}

//배열에 추가할 때 push 메소드를 사용하는데
// javascript에서는 index 에러가 따로 뜨지 않기 때문에 정해진 사이즈가 없기 때문에
const arr2 = [1, 2, 3];

arr2[arr2.length] = 3;
console.log(arr2);
// 만약 순서대로 넣지 않는다면 그 중간값은 비어있다, empty

// 배열의 마지막 요소를 제거하는 메소드 ,원본이 수정되는 메소드
const arr3 = [1, 2, 3, 4, 5];
arr3.pop();
console.log(arr3);

// 첫번째 요소를 제거하고 싶어
// shift메소드 첫번째 요소를 제거해준다
// 원본이 수정되는 메소드
arr3.shift();

const arr1 = [1, 2];
const arr5 = [3, 4];
const arr4 = arr1.concat(arr5);
// 배열 이어붙일때 사용하자
// 예)판매상품 리스트가 있는데
// 원본 배열 수정하면 안되고
// 생활 가전 식품 리스트가 따로 있고
// 우리가 전체 상품 리스트를 뽑아서 이벤트성이나
// 전체 상품 페이지를 구성해야할 때
// 원본은 유지하고 새로운 리스트를 만들 수 있다.

console.log(arr4);
// 원본배열의 중간 값을 제거 추가 하는 경우
//splice
const arr6 = [1, 2, 3, 4];
const result2 = arr6.splice(1, 2, 20, 30);
// 1,2인덱스를 제거하고 20,30을 추가
console.log(arr6);

// 함수의 반환은 제거한 요소들이 반환된다.
console.log(result2);

const arr7 = [1, 2, 3, 4];
const result3 = arr7.splice(1, 2);
console.log(arr7); //제거한 원본배열
console.log(result3); //함수의 반환값으로 제거한 요소

// 배열에서 특정 요소제거 함수
const arr8 = [1, 50, 3, 1, 50, 6];
function remove(arr, item) {
  //제거할 item의 인덱스
  // indexOf
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1); //해당 인덱스에서 하나 제거
  }
  return arr;
}
console.log(remove(arr8, 50));

// 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수
// slice 원본 배열은 반환 x
const arr9 = [1, 2, 3];
// arr9.slice(0, 1);
console.log(arr9.slice(0, 2));

// join 메소드 원본 배열의 모든 요소를 문자열로 반환
const arr10 = [1, 2, 3, 4];
const result4 = arr10.join();
console.log(result4);

// reverse()배열을 뒤집어 주는 메소드

console.log(arr10.reverse());

const arr11 = [1, 2, 3, 4, 5];
// fill 메소드 ES6 인자로 전달받은 값을 배열의 처음주터 끝까지 채워준다.
// 배열의 갯수를 유지하되 값을 초기화 해야 할 때 사용.
arr11.fill(1);
console.log(arr11);

// ES10
// [1,2,3,4,5,[4,4]]==[1,2,3,4,5,4,4] =>이중배열을 1차원 배열로
// flat()메소드가 배열의 뎁스를 맞춰준다. 1차 배열로
const arr12 = [1, [2, 3, 4], [3, 4]].flat(); //한 depth 올려서 맞춰준다.
const arr13 = [1, [2, [3]], [2, [5]]].flat(2); //매개변수로 뎁스의 개수
// 배열안에 배열이 있는데 한개의 배열로 작업을 해야겠죵
// 이걸로 하나의 배열로 변경해주자
const arr14=[[[[[[[[1]]]]]]]].flat(Infinity) //뎁스가 몇개든 다 꺼내준다.
console.log(arr12);
console.log(arr13);
console.log(arr14);
