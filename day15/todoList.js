// window.localStorage.clear();
let count = 0;
const addLocalStorage = () => {
  let name = document.querySelectorAll("input")[0].value;
  let todo = document.querySelector("textarea").value;
  let time = document.querySelectorAll("input")[1].value;

  if (localStorage.length == 0) {
    count++;
    this.localStorage.setItem(
      "board",
      `{"name":"${name}","todo":"${todo}","time":"${time}","ID":"${count}"}`
    );
  } else {
    count++;
    let tempLocalStorageBoard = this.localStorage.getItem("board");
    this.localStorage.setItem(
      "board",
      tempLocalStorageBoard +
        "/" +
        `{"name":"${name}","todo":"${todo}","time":"${time}","ID":"${count}"}`
    );
  }
  render();
};

const render = () => {
  _div.innerHTML = "";
  let _ul = document.createElement("ul");
  let _li = document.createElement("li");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  div1.innerHTML = "이름";
  div2.innerHTML = "할 일";
  div3.innerHTML = "언제?";
  _li.style.display = "flex";
  _li.append(div1, div2, div3);
  _ul.append(_li);
  _div.append(_ul);

  let boardArray = window.localStorage.getItem("board").split("/");
  boardArray.forEach((a) => {
    let _ul = document.createElement("ul");
    let _li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div1.innerHTML = JSON.parse(a).name;
    div2.innerHTML = JSON.parse(a).todo;
    div3.innerHTML = JSON.parse(a).time;
    _li.style.display = "flex";
    _li.append(div1, div2, div3);
    _ul.append(_li);
    _ul.id = JSON.parse(a).ID;
    _ul.addEventListener("click", (_ulElement) => {
      let newBoardArray = boardArray.filter((a) => {
        return JSON.parse(a).ID !== _ul.id;
      });
      console.log(newBoardArray);
      window.localStorage.clear();
      _ul.remove();
      localStorage.setItem("board", newBoardArray.join("/"));
    });
    _div.append(_ul);
    _ul.add;
  });
};

document.querySelector("#addBtn").addEventListener("click", addLocalStorage);
