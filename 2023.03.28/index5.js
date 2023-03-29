let pepe = document.querySelector(".pepe");
let changeBox = document.querySelector(".change-box");
let whatWillChangeArr = [1, 2, 3];
let whatWillChange;
pepe.addEventListener("mousedown", () => {});

changeBox.addEventListener("dragenter", () => {
  console.log("dd");
  whatWillChange = whatWillChangeArr[Math.floor(Math.random() * 3 + 1)];
});

document.addEventListener("dragover", (event) => {
  event.preventDefault(); // prevent default behavior
});

document.addEventListener("drop", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("change-box")) {
    if (whatWillChange === 1) {
      pepe.style.backgroundImage = 'url("./??.jpeg")';
    } else if (whatWillChange === 2) {
      pepe.style.backgroundImage = 'url("./흐뭇.jpeg")';
    } else {
      pepe.style.backgroundImage = 'url("./우는페페.jpeg")';
    }
  }
});
