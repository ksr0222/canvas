import "./style.css";

import { drawCanvas } from "./canvas.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>3주차</h1>
    <div class="wrap">
      <canvas id="canvas" width="400" height="400"></canvas>
    </div>
  </div>
`;

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
drawCanvas(canvas);
