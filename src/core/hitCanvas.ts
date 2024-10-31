import { Canvas } from "./canvas";

export class HitCanvas extends Canvas {
  static canvas:HitCanvas;

  constructor(canvasEl: HTMLCanvasElement) {
    super(canvasEl);
    HitCanvas.canvas = this;
  }


  draw(): void {
    this.canvasContext.clear(this.canvasElement.width, this.canvasElement.height);
    Canvas.layers.forEach((layer) => layer.draw(this.canvasContext.ctx));
  }
}