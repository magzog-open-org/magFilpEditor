import { HtmlHelper } from "src/common/helpers";
import { Canvas } from "./canvas";
import { Layer } from "./layer";
import { TComponent } from "./component";
import { HitCanvas } from "./hitCanvas";
import { SceneCanvas } from "./sceneCanvas";

export class Editor {
  private hitCanvas;
  private sceneCanvas;

  constructor(canvasId?: string){
    const hitCanvasEl = HtmlHelper.createCanvasEl();
    const sceneCanvasEl = canvasId ? HtmlHelper.createCanvasEl(canvasId) : HtmlHelper.createCanvasEl();
    this.sceneCanvas = new SceneCanvas(sceneCanvasEl);
    this.hitCanvas = new HitCanvas(hitCanvasEl);
    const sceneContext = sceneCanvasEl.getContext("2d");
    const hitContext = hitCanvasEl.getContext("2d");
    if(!sceneContext || !hitContext){ throw new Error('Failed to get the canvas context'); }
    Canvas.createLayer(sceneContext, hitContext)
  }

  addLayer(layer:Layer){ Canvas.addLayer(layer); }
  createLayer():Layer { return Canvas.createLayer(this.sceneCanvas.getContext(), this.hitCanvas.getContext()); }
  removeLayer(layer:Layer){ Canvas.removeLayer(layer); }

  addBlock(block:TComponent){ Canvas.activeLayer.addBlock(block); }

  makeGroup(component: TComponent){ }
  ungroup(){}
}