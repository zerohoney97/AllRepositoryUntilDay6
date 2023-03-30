var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let n=0;
ctx.beginPath();
ctx.rect(10, 40, 100, 30);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(130, 40, 100, 30);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(250, 40, 100, 30);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(370, 40, 100, 30);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 450, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// 공을 움직이는 함수
function draw() {
  // drawing code
  ctx.beginPath();
  ctx.arc(50, n, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  n+=10
  ctx.clearRect(50, n, 10, 0);
}
setInterval(draw, 1000);
