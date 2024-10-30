import { HtmlHelper } from "src/common/helpers";
import { Canvas, HitCanvas, SceneCanvas } from "./canvas";
import { Layer } from "./layer";
import { Group } from "./group";
import { TComponent } from "./component";

export class Editor {
  private hitCanvas;
  private sceneCanvas;

  constructor(canvasId?: string){
    const hitCanvas = HtmlHelper.createCanvasEl();
    const sceneCanvasEl = canvasId ? HtmlHelper.createCanvasEl(canvasId) : HtmlHelper.createCanvasEl();
    this.hitCanvas = new HitCanvas(hitCanvas);
    this.sceneCanvas = new SceneCanvas(sceneCanvasEl);
  }

  addLayer(layer:Layer){ Canvas.addLayer(layer); }
  removeLayer(layer:Layer){ Canvas.removeLayer(layer); }

  makeGroup(component: TComponent){ }
  ungroup(){}
}