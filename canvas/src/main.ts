import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("myCanvas");
const ctx1_1 = canvas.getContext("2d");

ctx1_1.beginPath(); // 선 그리기 시작
ctx1_1.moveTo(100, 50); // 시작점으로 이동
ctx1_1.lineTo(300, 50); // 선의 끝점으로 이동
ctx1_1.lineTo(300, 200); // 선의 끝점으로 이동
ctx1_1.lineTo(100, 200); // 선의 끝점으로 이동
ctx1_1.lineTo(100, 50); // 선의 끝점으로 이동
ctx1_1.lineWidth = 20; // 선 두께 지정
ctx1_1.strokeStyle = "#00f"; // 선 색 지정
ctx1_1.lineCap = "square"; // 선 끝부분 정리(butt, round, square)
ctx1_1.stroke(); // 선을 그림
ctx1_1.fillStyle = "red"; // 내부에 채울 색 지정
ctx1_1.fill();
