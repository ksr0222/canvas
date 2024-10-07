import "./style.css";

//3.1 선 그리기
const canvas_03_1_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_1_1")!;
const ctx_03_1_1 = canvas_03_1_1.getContext("2d")!;

//선 그리기 ~ 끝부분 처리하기
ctx_03_1_1.beginPath();
ctx_03_1_1.moveTo(100, 50);
ctx_03_1_1.lineTo(300, 50);
ctx_03_1_1.lineTo(300, 200);
ctx_03_1_1.lineTo(100, 200);
ctx_03_1_1.lineTo(100, 50);
ctx_03_1_1.lineWidth = 20;
ctx_03_1_1.strokeStyle = "#00f";
ctx_03_1_1.lineCap = "square";
ctx_03_1_1.stroke();
ctx_03_1_1.fillStyle = "red";
ctx_03_1_1.fill();

//선의 세 가지 끝부분 처리 방법 알아보기 ~ 선의 간격을 조정하여 점선 만들기
const canvas_03_1_7 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_1_7")!;
const ctx_03_1_7 = canvas_03_1_7.getContext("2d")!;
ctx_03_1_7.lineWidth = 10;
ctx_03_1_7.strokeStyle = "#00f";
ctx_03_1_7.beginPath();
ctx_03_1_7.moveTo(100, 50);
ctx_03_1_7.lineTo(300, 50);
ctx_03_1_7.lineTo(300, 100);
// ctx_03_1_7.setLineDash([20]);
// ctx_03_1_7.setLineDash([20, 10]);
ctx_03_1_7.setLineDash([20, 10, 50, 10]);
// ctx_03_1_7.lineJoin = "miter";
// ctx_03_1_7.lineJoin = "round";
// ctx_03_1_7.lineJoin = "bevel";
// ctx_03_1_7.lineCap = "butt";
ctx_03_1_7.stroke();

// ctx_03_1_7.beginPath();
// ctx_03_1_7.moveTo(100, 100);
// ctx_03_1_7.lineTo(300, 100);
// ctx_03_1_7.lineCap = "round";
// ctx_03_1_7.stroke();

// ctx_03_1_7.beginPath();
// ctx_03_1_7.moveTo(100, 150);
// ctx_03_1_7.lineTo(300, 150);
// ctx_03_1_7.lineCap = "square";
// ctx_03_1_7.stroke();

//3.2 사각형 그리기
const canvas_03_2_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_2_1")!;
const ctx_03_2_1 = canvas_03_2_1.getContext("2d")!;

//사각형 그리기 ~ 내부를 사각형으로 지우기
ctx_03_2_1.lineWidth = 10;
ctx_03_2_1.strokeStyle = "red";
ctx_03_2_1.fillStyle = "blue";
ctx_03_2_1.fillRect(50, 50, 200, 200);
ctx_03_2_1.strokeRect(50, 50, 200, 200);
ctx_03_2_1.clearRect(70, 70, 100, 50);
// ctx_03_2_1.fillStyle = "magenta";
// ctx_03_2_1.fillRect(20, 20, 100, 100);
// ctx_03_2_1.strokeRect(20, 20, 100, 100);
// ctx_03_2_1.fillStyle = "green";
// ctx_03_2_1.fillRect(150, 150, 50, 50);
// ctx_03_2_1.strokeRect(150, 150, 50, 50);

//3.3 원 그리기
//기본 원 그리기
const canvas_03_3_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_3_1")!;
const ctx_03_3_1 = canvas_03_3_1.getContext("2d")!;
ctx_03_3_1.arc(150, 150, 100, 0, Math.PI * 2);
ctx_03_3_1.stroke();

//선과 호를 연결하여 라운드 코너 그리기
const canvas_03_3_2 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_3_2")!;
const ctx_03_3_2 = canvas_03_3_2.getContext("2d")!;
ctx_03_3_2.beginPath();
ctx_03_3_2.moveTo(50, 50);
ctx_03_3_2.lineTo(300, 50);
ctx_03_3_2.arcTo(350, 50, 350, 100, 50);
ctx_03_3_2.lineTo(350, 200);
ctx_03_3_2.stroke();

//quadraticCurve 그리기
const canvas_03_3_3 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_3_3")!;
const ctx_03_3_3 = canvas_03_3_3.getContext("2d")!;
ctx_03_3_3.beginPath();
ctx_03_3_3.moveTo(50, 50);
ctx_03_3_3.lineTo(300, 50);
ctx_03_3_3.quadraticCurveTo(200, 100, 350, 100);
ctx_03_3_3.lineTo(350, 200);
ctx_03_3_3.stroke();

//bezierCurve 그리기
const canvas_03_3_4 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_3_4")!;
const ctx_03_3_4 = canvas_03_3_4.getContext("2d")!;
ctx_03_3_4.beginPath();
ctx_03_3_4.moveTo(50, 50);
ctx_03_3_4.lineTo(300, 50);
ctx_03_3_4.bezierCurveTo(200, 70, 100, 150, 350, 100);
ctx_03_3_4.lineTo(350, 200);
ctx_03_3_4.stroke();

//3.4 내부 채우기
//gradient로 내부 채우기
const canvas_03_4_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_4_1")!;
const ctx_03_4_1 = canvas_03_4_1.getContext("2d")!;
const grad = ctx_03_4_1.createLinearGradient(50, 50, 250, 50);
grad.addColorStop(0, "red");
grad.addColorStop(1 / 6, "orange");
grad.addColorStop(2 / 6, "yellow");
grad.addColorStop(3 / 6, "green");
grad.addColorStop(4 / 6, "aqua");
grad.addColorStop(5 / 6, "blue");
grad.addColorStop(1, "purple");
ctx_03_4_1.lineWidth = 5;
ctx_03_4_1.fillStyle = grad;
ctx_03_4_1.fillRect(50, 50, 200, 200);
ctx_03_4_1.strokeRect(50, 50, 200, 200);

//radial gradient로 사각형 내부 채우기
const canvas_03_4_2 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_4_2")!;
const ctx_03_4_2 = canvas_03_4_2.getContext("2d")!;
const grad2 = ctx_03_4_2.createRadialGradient(0, 0, 0, 100, 100, 300);
grad2.addColorStop(0, "red");
grad2.addColorStop(0.5, "yellow");
grad2.addColorStop(1, "black");
ctx_03_4_2.lineWidth = 5;
ctx_03_4_2.fillStyle = grad2;
ctx_03_4_2.fillRect(0, 0, 300, 300);
ctx_03_4_2.strokeRect(0, 0, 300, 300);

//패턴으로 사각형 내부 채우기
const canvas_03_4_3 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_4_3")!;
const ctx_03_4_3 = canvas_03_4_3.getContext("2d")!;
const heart = new Image();
heart.src = "src/images/heart.png";
heart.onload = function () {
  ctx_03_4_3.fillStyle = ctx_03_4_3.createPattern(heart, "repeat");
  ctx_03_4_3.fillRect(0, 0, canvas_03_4_3.width, canvas_03_4_3.height);
};

//3.5 이미지 그리기
//이미지를 원래 크기대로 그리기 ~ 이미지를 잘라 일부만 그리기
const canvas_03_5_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_5_1")!;
const ctx_03_5_1 = canvas_03_5_1.getContext("2d")!;
const heart2 = new Image();
heart2.src = "src/images/heart.png";
heart2.onload = function () {
  // ctx_03_5_1.drawImage(heart2, 0, 0);
  // ctx_03_5_1.drawImage(heart2, 0, 0, 150, 100);
  ctx_03_5_1.drawImage(heart2, 100, 0, 150, 100, 0, 0, 300, 200);
};

//3.6 글씨 쓰기
//글씨 그리기 ~ 글씨의 외곽선 그리기
const canvas_03_6_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_6_1")!;
const ctx_03_6_1 = canvas_03_6_1.getContext("2d")!;
ctx_03_6_1.fillStyle = "#6495ED";
ctx_03_6_1.font = "italic bold 30px Arial, sans-serif";
ctx_03_6_1.fillText("Hello Canvas World!", 10, 100);
ctx_03_6_1.lineWidth = 2;
ctx_03_6_1.strokeText("Hello Canvas World!", 10, 100);
// ctx_03_6_1.fillText("The fillText() method draws filled text on the canvas.", 50, 100);
// ctx_03_6_1.fillText("The fillText() method draws filled text on the canvas.", 50, 120, 100);
// ctx_03_6_1.fillText("The fillText() method draws filled text on the canvas.", 50, 140, 200);
// ctx_03_6_1.fillText("The fillText() method draws filled text on the canvas.", 50, 160, 300);

//글씨의 좌우정렬 알아보기
const canvas_03_6_4 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_6_4")!;
const ctx_03_6_4 = canvas_03_6_4.getContext("2d")!;
ctx_03_6_4.fillStyle = "#ctx_03_6_5";
ctx_03_6_4.font = "italic bold 30px Arial, sans-serif";
ctx_03_6_4.textAlign = "start";
ctx_03_6_4.fillText("Hello World!", 200, 50);
ctx_03_6_4.textAlign = "end";
ctx_03_6_4.fillText("Hello World!", 200, 100);
ctx_03_6_4.textAlign = "left";
ctx_03_6_4.fillText("Hello World!", 200, 150);
ctx_03_6_4.textAlign = "right";
ctx_03_6_4.fillText("Hello World!", 200, 200);
ctx_03_6_4.textAlign = "center";
ctx_03_6_4.fillText("Hello World!", 200, 250);
ctx_03_6_4.strokeStyle = "blue";
ctx_03_6_4.moveTo(200, 0);
ctx_03_6_4.lineTo(200, 400);
ctx_03_6_4.stroke();

//글씨의 상하정렬 알아보기
const canvas_03_6_5 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_6_5")!;
const ctx_03_6_5 = canvas_03_6_5.getContext("2d")!;
ctx_03_6_5.fillStyle = "#ctx_03_6_5";
ctx_03_6_5.font = "italic bold 20px Arial, sans-serif";
ctx_03_6_5.textBaseline = "top";
ctx_03_6_5.fillText("top!", 10, 150);
ctx_03_6_5.textBaseline = "bottom";
ctx_03_6_5.fillText("bottom!", 50, 150);
ctx_03_6_5.textBaseline = "middle";
ctx_03_6_5.fillText("middle!", 130, 150);
ctx_03_6_5.textBaseline = "alphabetic";
ctx_03_6_5.fillText("alphabetic!", 220, 150);
ctx_03_6_5.textBaseline = "hanging";
ctx_03_6_5.fillText("hanging!", 300, 150);
ctx_03_6_5.strokeStyle = "red";
ctx_03_6_5.moveTo(0, 150);
ctx_03_6_5.lineTo(400, 150);
ctx_03_6_5.stroke();

//3.7 그림자 그리기
const canvas_03_7_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_7_1")!;
const ctx_03_7_1 = canvas_03_7_1.getContext("2d")!;
ctx_03_7_1.shadowColor = "rgba(0, 0, 0, 0.3)";
ctx_03_7_1.shadowOffsetX = 5;
ctx_03_7_1.shadowOffsetY = 5;
ctx_03_7_1.shadowBlur = 3;
ctx_03_7_1.fillStyle = "red";
ctx_03_7_1.fillRect(50, 50, 100, 100);

//3.8 이동, 회전, 스케일, 변형하기
//위치 이동시키기 ~ 크기 변형하기
const canvas_03_8_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_8_1")!;
const ctx_03_8_1 = canvas_03_8_1.getContext("2d")!;
ctx_03_8_1.fillStyle = "green";
ctx_03_8_1.fillRect(50, 50, 100, 100);
ctx_03_8_1.scale(0.5, 0.5);
// ctx_03_7_1.translate(100, 100);
ctx_03_8_1.fillStyle = "red";
ctx_03_8_1.fillRect(50, 50, 100, 100);

//회전시키기 ~ 사각형 형태 변형하기
const canvas_03_8_3 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_8_3")!;
const ctx_03_8_3 = canvas_03_8_3.getContext("2d")!;
ctx_03_8_3.fillStyle = "yellow";
ctx_03_8_3.strokeStyle = "blue";
ctx_03_8_3.lineWidth = 3;
// ctx_03_8_3.strokeRect(100, 100, 100, 100);
// ctx_03_8_3.fillRect(100, 100, 100, 100);
// ctx_03_8_3.rotate(5 * Math.PI / 180);
// ctx_03_8_3.strokeRect(100, 100, 100, 100);
// ctx_03_8_3.fillRect(100, 100, 100, 100);
// ctx_03_8_3.rotate(5 * Math.PI / 180);
// ctx_03_8_3.strokeRect(100, 100, 100, 100);
// ctx_03_8_3.fillRect(100, 100, 100, 100);

// ctx_03_8_3.strokeRect(0, 0, 100, 100);
// ctx_03_8_3.fillRect(0, 0, 100, 100);
// ctx_03_8_3.transform(1.5, 0, 0, 1.5, 100, 100);
// ctx_03_8_3.strokeRect(0, 0, 100, 100);
// ctx_03_8_3.fillRect(0, 0, 100, 100);

ctx_03_8_3.strokeRect(0, 0, 100, 100);
ctx_03_8_3.fillRect(0, 0, 100, 100);
ctx_03_8_3.setTransform(1, 0.2, 0.2, 1, 100, 100);
ctx_03_8_3.fillStyle = "green";
ctx_03_8_3.fillRect(0, 0, 100, 100);
ctx_03_8_3.transform(1, 0, 0, 1, 100, 100);
ctx_03_8_3.fillStyle = "red";
ctx_03_8_3.fillRect(0, 0, 100, 100);
// ctx_03_8_3.strokeRect(0, 0, 100, 100);
// ctx_03_8_3.fillRect(0, 0, 100, 100);

//3.9 색상 보정하기
//~ 지정한 부분의 색상을 흑백으로 바꾸어 출력하기
const canvas_03_9_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_9_1")!;
const ctx_03_9_1 = canvas_03_9_1.getContext("2d")!;
ctx_03_9_1.fillStyle = "red";
ctx_03_9_1.fillRect(20, 30, 100, 100);
ctx_03_9_1.fillStyle = "green";
ctx_03_9_1.fillRect(50, 50, 100, 100);
const src_03_9_1 = ctx_03_9_1.getImageData(0, 0, 100, 100);
const pixels = src_03_9_1.data;
const numPixels = pixels.length;

for (let i = 0; i < numPixels; i++) {
  const avg = (pixels[i * 4] + pixels[i * 4 + 1] + pixels[i * 4 + 2]) / 3;
  pixels[i * 4] = avg;
  pixels[i * 4 + 1] = avg;
  pixels[i * 4 + 2] = avg;
}

ctx_03_9_1.putImageData(src_03_9_1, 200, 50);
ctx_03_9_1.strokeRect(0, 0, 100, 100);
ctx_03_9_1.strokeRect(200, 50, 100, 100);

//이미지에서 영역을 선택하여 그 부분의 색상 반전시키기
const canvas_03_9_2 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_9_2")!;
const ctx_03_9_2 = canvas_03_9_2.getContext("2d")!;
const heart3 = new Image();
heart3.src = "src/images/heart.png";
heart3.onload = function () {
  draw(this);
};

function draw(img: any) {
  ctx_03_9_2.drawImage(img, 0, 0);
  const src = ctx_03_9_2.getImageData(100, 0, 100, 100);
  const datas = src.data;
  const numPixels = datas.length;

  for (let i = 0; i < numPixels; i += 4) {
    datas[i] = 255 - datas[i];
    datas[i + 1] = 255 - datas[i + 1];
    datas[i + 2] = 255 - datas[i + 2];
  }

  ctx_03_9_2.putImageData(src, 100, 100);
  ctx_03_9_2.strokeStyle = "blue";
  ctx_03_9_2.lineWidth = 3;
  ctx_03_9_2.strokeRect(100, 0, 100, 100);
  ctx_03_9_2.strokeRect(100, 100, 100, 100);
}

//3.10 합성하기
//알파값 적용하기 ~ 두 개의 이미지를 합성하여 그리기
const canvas_03_10_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_10_1")!;
const ctx_03_10_1 = canvas_03_10_1.getContext("2d")!;
ctx_03_10_1.fillStyle = "rgba(63, 169, 245, 1)";
ctx_03_10_1.fillRect(20, 20, 100, 100);
ctx_03_10_1.globalCompositeOperation = "source-over";
// ctx_03_10_1.globalAlpha = 0.5;
ctx_03_10_1.fillStyle = "blue";
ctx_03_10_1.fillRect(50, 50, 100, 100);

//3.11 애니메이션 만들기
//사각형을 x축으로 왼쪽에서 오른쪽으로 움직이기
const canvas_03_11_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_11_1")!;
const ctx_03_11_1 = canvas_03_11_1.getContext("2d")!;
let ctx_03_15_203_11_1_W = canvas_03_11_1.width;
let ctx_03_15_203_11_1_H = canvas_03_11_1.height;
let ctx_03_15_203_11_1_x = 0;

function ctx_03_11_1_animate() {
  ctx_03_11_1.clearRect(0, 0, ctx_03_15_203_11_1_W, ctx_03_15_203_11_1_H);
  ctx_03_11_1.fillStyle = "red";
  ctx_03_11_1.fillRect(ctx_03_15_203_11_1_x, 10, 50, 50);
  // ctx_03_11_1.rotate(0.6);
  ctx_03_15_203_11_1_x++;
}
const ctx_03_11_1_animateInterval = setInterval(ctx_03_11_1_animate, 30);

//두 개의 사각형을 만들고 애니메이션을 멈추게 하기
const canvas_03_11_2 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_11_2")!;
const ctx_03_11_2 = canvas_03_11_2.getContext("2d")!;
let ctx_03_11_2_W = canvas_03_11_2.width;
let ctx_03_11_2_H = canvas_03_11_2.height;
let ctx_03_11_2_x = 0,
  ctx_03_11_2_y = 0;

function ctx_03_11_2_animate() {
  ctx_03_11_2.clearRect(0, 0, ctx_03_11_2_W, ctx_03_11_2_H);
  ctx_03_11_2.fillStyle = "red";
  ctx_03_11_2.fillRect(ctx_03_11_2_x, 10, 50, 50);
  ctx_03_11_2.fillStyle = "blue";
  ctx_03_11_2.fillRect(10, ctx_03_11_2_y, 50, 50);
  ctx_03_11_2_x++;
  ctx_03_11_2_y++;

  if (ctx_03_11_2_x > ctx_03_11_2_W) {
    ctx_03_11_2_x = 0;
  }

  if (ctx_03_11_2_y > ctx_03_11_2_H) {
    ctx_03_11_2_y = 0;
  }
}
const ctx_03_11_2_animateInterval = setInterval(ctx_03_11_2_animate, 30);
ctx_03_11_2.canvas.addEventListener("click", function () {
  clearInterval(ctx_03_11_2_animateInterval);
});

//3.12 클릭한 곳에 사각형 그리기
//마우스로 클릭한 곳의 좌표 얻기
const canvas_03_12_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_12_1")!;
const ctx_03_12_1 = canvas_03_12_1.getContext("2d")!;

ctx_03_12_1.canvas.addEventListener("click", function (event) {
  const rect = canvas_03_12_1.getBoundingClientRect();
  let mouseX = event.clientX - rect.left;
  let mouseY = event.clientY - rect.top;
  // console.log("X: " + mouseX + ", Y: " + mouseY);
  ctx_03_12_1.fillStyle = "red";
  ctx_03_12_1.fillRect(mouseX - 10, mouseY - 10, 20, 20);
});

//3.13 백그라운드 이미지 애니메이션 만들기
//이미지 애니메이션 만들기
const canvas_03_13_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_13_1")!;
const ctx_03_13_1 = canvas_03_13_1.getContext("2d")!;
const ctx_03_13_1_spaceImage = new Image();
ctx_03_13_1_spaceImage.src = "src/images/space.png";
let ctx_03_13_1_x = 0;

function ctx_03_13_1_animate() {
  ctx_03_13_1.drawImage(ctx_03_13_1_spaceImage, ctx_03_13_1_x--, 0);

  if (ctx_03_13_1_x <= -600) {
    ctx_03_13_1_x = 0;
  }
}
const ctx_03_13_1_animateInterval = setInterval(ctx_03_13_1_animate, 30);

//3.14 이미지를 키보드로 움직이기
//3.13절에서 만든 배경에 이어서 비행기 만들어보기, 키보드를 눌렀을 때 비행기가 움직이도록 하기
const canvas_03_14_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_14_1")!;
const ctx_03_14_1 = canvas_03_14_1.getContext("2d")!;
const ctx_03_14_1_spaceImage = new Image();
ctx_03_14_1_spaceImage.src = "src/images/space.png";
const ctx_03_14_1_fighterImage = new Image();
ctx_03_14_1_fighterImage.src = "src/images/fighter.png";
let ctx_03_14_1_x = 0;
let ctx_03_14_1_speed = 5;
let keyCodeValue: string;

function Background(this: any) {
  (this.x = 0),
    (this.y = 0),
    (this.w = ctx_03_14_1_spaceImage.width),
    (this.h = ctx_03_14_1_spaceImage.height);
  this.render = function () {
    ctx_03_14_1.drawImage(ctx_03_14_1_spaceImage, this.x--, 0);
    if (this.x <= -600) {
      this.x = 0;
    }
  };
}

function Player(this: any) {
  (this.x = 0),
    (this.y = 0),
    (this.w = ctx_03_14_1_fighterImage.width),
    (this.h = ctx_03_14_1_fighterImage.height);
  this.render = function () {
    ctx_03_14_1.drawImage(ctx_03_14_1_fighterImage, this.x, this.y);
  };
}

const background = new Background();
const player = new Player();
player.x = 30;
player.y = 150;

function ctx_03_14_1_animate() {
  background.render();
  player.render();
  update();
}

const ctx_03_14_1_animateInterval = setInterval(ctx_03_14_1_animate, 30);

function update() {
  if (keyCodeValue === "w") {
    player.y -= ctx_03_14_1_speed;
  } else if (keyCodeValue === "s") {
    player.y += ctx_03_14_1_speed;
  } else if (keyCodeValue === "a") {
    player.x -= ctx_03_14_1_speed;
  } else if (keyCodeValue === "d") {
    player.x += ctx_03_14_1_speed;
  }
}

document.addEventListener("keydown", function (event) {
  keyCodeValue = event.key;
  // console.log(keyCodeValue);
  // console.log(event.keyCode + "|" + keyCodeValue);
});

document.addEventListener("keyup", function (event) {
  keyCodeValue = "";
});

//3.15 JSON 객체와 배열 처리하기
//JSON 객체를 배열로 처리하여 사각형을 캔버스에 그리기
const canvas_03_15_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_15_1")!;
const ctx_03_15_1 = canvas_03_15_1.getContext("2d")!;

const buildings = [
  { id: "house", x: 50, y: 100, w: 50, h: 50, bg: "red" },
  { id: "hospital", x: 150, y: 100, w: 50, h: 50, bg: "green" },
  { id: "firestation", x: 250, y: 100, w: 50, h: 50, bg: "blue" },
];

for (let i = 0; i < buildings.length; i++) {
  let b = buildings[i];
  ctx_03_15_1.fillStyle = b.bg;
  ctx_03_15_1.fillRect(b.x, b.y, b.w, b.h);
}

//JSON 객체를 배열로 처리하여 캔버스에 이미지 그리기, 캔버스의 빌딩 이미지를 마우스로 클릭할 때 빌딩 이름 출력하기
const canvas_03_15_2 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_15_2")!;
const ctx_03_15_2 = canvas_03_15_2.getContext("2d")!;
const buildings_v2 = [
  { id: "AirPort", x: 50, y: 50, w: 64, h: 64, sx: 0, sy: 0 },
  { id: "Bank", x: 150, y: 50, w: 64, h: 64, sx: 100, sy: 0 },
  { id: "CarRepair", x: 250, y: 50, w: 64, h: 64, sx: 200, sy: 0 },
  { id: "GasStation", x: 50, y: 150, w: 64, h: 64, sx: 300, sy: 0 },
  { id: "Hospital", x: 150, y: 150, w: 64, h: 64, sx: 400, sy: 0 },
  { id: "Temple", x: 250, y: 150, w: 64, h: 64, sx: 500, sy: 0 },
];
const buildingImage = new Image();
buildingImage.src = "src/images/buildings.png";

const groundImage = new Image();
groundImage.src = "src/images/background.png";

buildingImage.onload = function () {
  ctx_03_15_2.drawImage(groundImage, 0, 0);
  for (let i = 0; i < buildings_v2.length; i++) {
    let sx = buildings_v2[i]["sx"];
    let sy = buildings_v2[i]["sy"];
    let sw = buildings_v2[i]["w"];
    let sh = buildings_v2[i]["h"];
    let dx = buildings_v2[i]["x"];
    let dy = buildings_v2[i]["y"];
    let dw = buildings_v2[i]["w"];
    let dh = buildings_v2[i]["h"];
    ctx_03_15_2.drawImage(buildingImage, sx, sy, sw, sh, dx, dy, dw, dh);
  }
};

document.addEventListener("mousedown", function (event) {
  const rect_v2 = canvas_03_15_2.getBoundingClientRect();
  let mouseX = event.clientX - rect_v2.left;
  let mouseY = event.clientY - rect_v2.top;

  for (let i = 0; i < buildings_v2.length; i++) {
    let bData = buildings_v2[i];

    if (
      mouseX >= bData.x &&
      mouseX < bData.x + bData.w &&
      mouseY >= bData.y &&
      mouseY < bData.y + bData.h
    ) {
      //            console.log(bData.id);

      ctx_03_15_2.clearRect(100, 260, 200, 30);
      ctx_03_15_2.fillStyle = "yellow";
      ctx_03_15_2.fillRect(100, 260, 200, 30);

      ctx_03_15_2.fillStyle = "#6495ED";
      ctx_03_15_2.textAlign = "center";
      ctx_03_15_2.font = "bold 20px Arial, sans-serif";
      ctx_03_15_2.fillText(bData.id, 200, 280);
    }
  }
});

//3.17 슈팅 충돌 체크하기
//비행기를 화면 하단에 배치하여 좌우로 움직임 구현하기 ~ 미사일과 적기의 충돌 처리하기 2
const canvas_03_17_1 =
  document.querySelector<HTMLCanvasElement>("#canvas_03_17_1")!;
const ctx_03_17_1 = canvas_03_17_1.getContext("2d")!;

let canW = canvas_03_17_1.width;
let canH = canvas_03_17_1.height;
let ctx_03_17_1_speed = 5;
let enemySpeed = 0.5;
// let keyCodeValue_v2;
let keysDown: { [key: string]: boolean } = {};
let missiles: any[] = [];

const ctx_03_17_1_fighterImage = new Image();
ctx_03_17_1_fighterImage.src = "src/images/BlueFighter.png";
const enemyImage = new Image();
enemyImage.src = "src/images/EnemyFighter.png";

const enemies = [
  { id: "enemy1", x: 100, y: -70, w: 43, h: 61 },
  { id: "enemy2", x: 200, y: -70, w: 43, h: 61 },
  { id: "enemy3", x: 300, y: -70, w: 43, h: 61 },
];

function Enemy(this: any) {
  // (this.w = 43), (this.h = 61);

  this.render = function () {
    if (enemies.length === 0) {
      gameOver();
      return;
    }

    for (let i = 0; i < enemies.length; i++) {
      let enemyY = (enemies[i].y += enemySpeed);
      // ctx_03_17_1.strokeStyle = "red";
      // ctx_03_17_1.strokeRect(enemies[i].x, enemyY, this.w, this.h);
      ctx_03_17_1.drawImage(enemyImage, enemies[i].x, enemyY);
    }
  };
}

function Player_v2(this: any) {
  (this.y = 250), (this.x = canW * 0.5 - 25), (this.w = 50), (this.h = 45);
  // this.missiles = [];

  this.render = function () {
    // ctx_03_17_1.strokeStyle = "red";
    // ctx_03_17_1.strokeRect(this.x, this.y, this.w, this.h);
    ctx_03_17_1.drawImage(ctx_03_17_1_fighterImage, this.x, this.y);

    //미사일을 이동
    for (let i = 0; i < missiles.length; i++) {
      let m = missiles[i];
      ctx_03_17_1.fillStyle = m.bg;
      ctx_03_17_1.fillRect(m.x, (m.y -= 5), m.w, m.h);

      //미사일과 적기의 충돌을 체크
      checkCollision(m, i);

      //화면밖에 미사일은 삭제
      if (m.y <= 0) {
        missiles.splice(i, 1);
        i--; // 삭제한 후 인덱스 조정
      }
    }
  };
}

//미사일과 적기의 충돌을 체크
function checkCollision(m: { x: number; y: number }, mi: number) {
  for (let i = 0; i < enemies.length; i++) {
    let e = enemies[i];
    if (m.x >= e.x && m.x <= e.x + e.w && m.y >= e.y && m.y <= e.y + e.h) {
      missiles.splice(missiles[mi], 1);
      enemies.splice(i, 1);
    }
  }
}

//적기를 다 파괴하면 애니메이션을 멈춤
function gameOver() {
  clearInterval(objAnimate);
  ctx_03_17_1.font = "bold 36px Arial, sans-serif";
  ctx_03_17_1.fillStyle = "#FC0";
  ctx_03_17_1.textAlign = "center";
  ctx_03_17_1.fillText("YOU WIN!", canW * 0.5, 150);
}

function update_v2() {
  // if (keyCodeValue_v2 === "a") {
  //   player_v2.x -= ctx_03_17_1_speed;
  // } else if (keyCodeValue_v2 === "d") {
  //   player_v2.x += ctx_03_17_1_speed;
  // }
  if ("a" in keysDown) {
    player_v2.x -= ctx_03_17_1_speed;
  } else if ("d" in keysDown) {
    player_v2.x += ctx_03_17_1_speed;
  }

  if (player_v2.x < 0) {
    player_v2.x = 0;
  } else if (player_v2.x > canW - player_v2.w) {
    player_v2.x = canW - player_v2.w;
  }
}

document.addEventListener("keydown", function (event) {
  // keyCodeValue_v2 = event.key;
  keysDown[event.key] = true;

  // space bar
  if (event.key === " ") {
    // player_v2.missiles.push({
    //   x: player_v2.x + player_v2.w * 0.5,
    //   y: player_v2.y - 5,
    //   w: 3,
    //   h: 10,
    //   bg: "red",
    // });
    missiles.push({
      x: player_v2.x + player_v2.w * 0.5,
      y: player_v2.y - 5,
      w: 3,
      h: 10,
      bg: "red",
    });
  }
});

document.addEventListener("keyup", function (event) {
  // keyCodeValue_v2 = "";
  delete keysDown[event.key];
});

const player_v2 = new Player_v2();
const enemy = new Enemy();

function ctx_03_17_1_animate() {
  ctx_03_17_1.clearRect(0, 0, canW, canH);
  enemy.render();
  update_v2();
  player_v2.render();
}

const objAnimate = setInterval(ctx_03_17_1_animate, 30);
