import { CanvasContext } from './canvasContext';
import { CanvasElement } from './canvasElement';
import { Layer } from './layer';
import { Base } from './base';

export class Canvas extends Base {
  protected element: CanvasElement;
  protected context: CanvasContext;
  static layers: Layer[] = [];

  constructor(canvasElement: HTMLCanvasElement) {
    super();
    const context = canvasElement.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    this.element = new CanvasElement(canvasElement);
    this.context = new CanvasContext(context);
    // this.layerManager = new LayerManager();
    this.setEvents();
  }

  private setEvents(): void {
    window.addEventListener("resize", () => { 
      this.resize(); 
      this.on("resized");
    });
    this.addListener("readyToResize", () => {  });
    this.addListener("resized", () => { this.draw(); });
  }

  draw(): void {}

  resize(): void {
    this.element.width = window.innerWidth;
    this.element.height = window.innerHeight;
  }

  static addLayer(layer: Layer): void { Canvas.layers.push(layer); }
  static removeLayer(layer: Layer): void { 
    const index = Canvas.layers.indexOf(layer);
    if (index > -1) {
      Canvas.layers.splice(index, 1);
    }
  }
}

export class HitCanvas extends Canvas {
  private static nextHitColor:number = 0;
  constructor(canvasEl: HTMLCanvasElement) {
    super(canvasEl);
  }
  static getNextHitColor(){
    let hexStr = (++HitCanvas.nextHitColor).toString(16)
    while (hexStr.length < 6) { hexStr = '0' + hexStr; }
    return '#' + hexStr;
  }

  draw(): void {
    this.context.clear(this.element.width, this.element.height);
    Canvas.layers.forEach((layer) => layer.draw(this.context.ctx));
  }
}

export class SceneCanvas extends Canvas {
  constructor(canvasEl: HTMLCanvasElement) {
    super(canvasEl);
  }

  draw(): void {
    this.context.clear(this.element.width, this.element.height);
    Canvas.layers.forEach((layer) => layer.draw(this.context.ctx));
  }

}