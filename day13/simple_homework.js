// 공부차원 조그만 실습
// 표 만들고
// ul,li 사용해서 표를 만들고
// input에 이름 나일 성별 내욜 안경착용유무 =>객체로
// 표에 추가되게 내용이 한줄한줄

let postArray = [];

function noticeBoard(name, age, gender, content, isGlasses) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.content = content;
  this.isGlasses = isGlasses;
}

function returnGlass(isGlasses) {
  return isGlasses ? "라섹하자" : "눈이 좋은 친구 ";
}

function onClickBtn() {
  let name = document.querySelector("#inputName").value;
  let age = document.querySelector("#inputAge").value;
  let gender = document.querySelector("#inputGender").value;
  let content = document.querySelector("#inputContent").value;
  let isGlasses = document.querySelector("#inputIsGlasses").checked;

  console.log(isGlasses);
  let newPost = new noticeBoard(
    name,
    age,
    gender,
    content,
    returnGlass(isGlasses)
  );
  postArray.push(newPost);
  let updatedPost = postArray.map((a) => {
    return `<li>내 이름은${a.name}이고 나이는${a.age}이고 성별은 ${a.gender}야!
    <br/>하고싶은말:${a.content}
    <br/>안경 착용 유무:${a.isGlasses}`;
  });
  document.querySelector("#tableId").innerHTML = updatedPost;
}

document.querySelector("#uploadBtn").addEventListener("click", onClickBtn);
