import { TComponent } from "./component";
import { IDrawable } from "./drawable";
import { OffScreenCanvas } from "./offScreenCanvas";
import { Base } from "./base";
import { ILayerConfig, LayerConfig } from "src/config/layerConfig";

export class Layer extends Base implements IDrawable {
  private children: TComponent[] = [];
  sceneContext: CanvasRenderingContext2D;
  hitContext: CanvasRenderingContext2D;
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;
  config: LayerConfig<ILayerConfig>;

  constructor(
    sceneContext: CanvasRenderingContext2D, 
    hitContext: CanvasRenderingContext2D, 
    config?: ILayerConfig
  ) {
    super();
    this.config = new LayerConfig<ILayerConfig>(config);
    this.sceneContext = sceneContext;
    this.hitContext = hitContext;
    this.offScreenCanvas = new OffScreenCanvas(sceneContext, this.config);
    this.offScreenHitCanvas = new OffScreenCanvas(hitContext, this.config);
    this.setEvents();
  }

  private setEvents(): void {
    // this.addListener("addBlock", () => {  });
  }

  addBlock(child: TComponent): void {
    this.children.push(child);
    this.drawOffScreenCanvas();
    this.draw(this.sceneContext);
    this.drawOffScreenHitCanvas();
    this.drawHit(this.hitContext);
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.lineWidth = 0;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  drawOffScreenHitCanvas(): void {
    this.offScreenHitCanvas.context.fillStyle = this.config.hitColor;
    this.offScreenHitCanvas.context.strokeStyle = this.config.hitColor;
    this.offScreenHitCanvas.context.lineWidth = 0;
    this.offScreenHitCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenCanvas.element, this.config.position.x, this.config.position.y);
    this.children.forEach((child) => child.draw(context));
  }

  drawHit(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenHitCanvas.element, this.config.position.x, this.config.position.y);
    this.children.forEach((child) => child.drawHit(context));
  }
}
