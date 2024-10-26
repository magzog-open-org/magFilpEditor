import { CanvasContext } from './canvasContext';
import { CanvasElement } from './canvasElement';
import { Layer } from './layer';
import { LayerManager } from '../layerManager';
import { EventListener } from 'src/common/eventListener';
import { Position, Size } from 'src/common/types';

export class Canvas extends EventListener {
  private element: CanvasElement;
  private context: CanvasContext;
  private layerManager: LayerManager;

  constructor(canvasElement: HTMLCanvasElement) {
    super();
    const context = canvasElement.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    this.element = new CanvasElement(canvasElement);
    this.context = new CanvasContext(canvasElement);
    this.layerManager = new LayerManager();
    this.element.width = window.innerWidth;
    this.element.height = window.innerHeight;
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

  resize(): void {
    this.element.width = window.innerWidth;
    this.element.height = window.innerHeight;
  }

  draw(): void {
    this.context.clear(this.element.width, this.element.height);
    this.layerManager.draw(this.context.ctx);
  }

  addLayer(layer: Layer): void { this.layerManager.add(layer); }
}

// export class HitCanvas extends Canvas {
//   private hitContext: HitContext;
//   constructor() {
//     super();
//     this.hitContext = new HitContext(this.context);
//   }
// }

// export class SceneCanvas extends Canvas {
//   private sceneContext: SceneContext;
//   constructor() {
//     super();
//     this.sceneContext = new SceneContext(this.context);
//   }
// }