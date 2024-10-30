import { TComponent } from "./component";
import { IDrawable } from "./drawable";
import { OffScreenCanvas } from "./offScreenCanvas";
import { Base } from "./base";
import { ILayerConfig, LayerConfig } from "src/config/layerConfig";

export class Layer extends Base implements IDrawable {
  private children: TComponent[] = [];
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;
  config: LayerConfig<ILayerConfig>;

  constructor(config?: ILayerConfig) {
    super();
    this.config = new LayerConfig<ILayerConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(this.config);
    this.offScreenHitCanvas = new OffScreenCanvas(this.config);
  }

  addBlock(child: TComponent): void {
    this.children.push(child);
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = this.config.fill.color!;
    this.offScreenCanvas.context.strokeStyle = this.config.border.color!;
    this.offScreenCanvas.context.lineWidth = this.config.border.thickness!;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  drawOffScreenHitCanvas(): void {
    this.offScreenCanvas.context.fillStyle = this.config.hitColor;
    this.offScreenCanvas.context.strokeStyle = this.config.hitColor;
    this.offScreenCanvas.context.lineWidth = this.config.border.thickness!;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
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
