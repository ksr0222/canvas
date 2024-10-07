import "./style.css";

//3.1 선 그리기
const drawline = (ctx: CanvasRenderingContext2D) => {
  //선 그리기 ~ 끝부분 처리하기
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(300, 50);
  ctx.lineTo(300, 200);
  ctx.lineTo(100, 200);
  ctx.lineTo(100, 50);
  ctx.lineWidth = 20;
  ctx.strokeStyle = "#00f";
  ctx.lineCap = "square";
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
};

export function setupCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext("2d")!;
  drawline(ctx);
}
