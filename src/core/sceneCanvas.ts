import { Canvas } from "./canvas";

export class SceneCanvas extends Canvas {
  static canvas:SceneCanvas;

  constructor(canvasEl: HTMLCanvasElement) {
    super(canvasEl);
    SceneCanvas.canvas = this;
  }

  static getContext(){ return this.canvas.canvasContext.ctx; }

  draw(): void {
    this.canvasContext.clear(this.canvasElement.width, this.canvasElement.height);
    Canvas.layers.forEach((layer) => layer.draw(this.canvasContext.ctx));
  }

}