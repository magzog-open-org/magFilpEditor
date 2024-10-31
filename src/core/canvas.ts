import { CanvasContext } from './canvasContext';
import { CanvasElement } from './canvasElement';
import { Base } from './base';
import { Layer } from './layer';
import { ILayerConfig } from 'src/config/layerConfig';

export class Canvas extends Base {
  protected canvasElement: CanvasElement;
  protected canvasContext: CanvasContext;
  protected static layers: Layer[] = [];
  static activeLayer:Layer;

  constructor(canvasElement: HTMLCanvasElement) {
    super();
    const context = canvasElement.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    this.canvasElement = new CanvasElement(canvasElement);
    this.canvasContext = new CanvasContext(context);
    
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

  getContext(){ return this.canvasContext.ctx; }
  getElement(){ return this.canvasElement.element; }

  draw(): void {}

  resize(): void {
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;
  }

  static setActiveLayer(layer: Layer) { Canvas.activeLayer = layer; }
  static addLayer(layer: Layer): void { Canvas.layers.push(layer); }
  static createLayer(
    sceneContext: CanvasRenderingContext2D, 
    hitContext: CanvasRenderingContext2D, 
    config?:ILayerConfig
  ):Layer { 
    const layer = new Layer(sceneContext, hitContext, config);
    if(Canvas.layers.length <= 0){ Canvas.activeLayer = layer; }
    Canvas.layers.push(layer); 
    return layer;
  }
  static removeLayer(layer: Layer): void { 
    const index = Canvas.layers.indexOf(layer);
    if (index > 0) { Canvas.layers.splice(index, 1); }
  }
}