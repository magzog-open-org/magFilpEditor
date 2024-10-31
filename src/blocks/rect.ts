import { BlockConfig, IBlockConfig } from "src/config/blockConfig";
import { OffScreenCanvas } from "src/core/offScreenCanvas";
import { IDrawable } from "src/core/drawable";
import { Block } from "src/core/block";
import { SceneCanvas } from "src/core/sceneCanvas";
import { HitCanvas } from "src/core/hitCanvas";

export interface IRectConfig extends IBlockConfig {
  // TODO: add more properties for Rect block
}

export class RectConfig<T> extends BlockConfig<T> implements IRectConfig {
  constructor(config?: IRectConfig) {
    super(config);
  }
}

export class Rect extends Block implements IDrawable {
  config: RectConfig<IRectConfig>;
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;

  constructor(config?: IRectConfig) {
    super(config);
    this.config = new RectConfig<IRectConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(SceneCanvas.canvas.getContext(), this.config);
    this.offScreenHitCanvas = new OffScreenCanvas(HitCanvas.canvas.getContext(), this.config);
    this.drawOffScreenCanvas();
    this.drawOffScreenHitCanvas();
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
  }
  
  drawHit(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenHitCanvas.element, this.config.position.x, this.config.position.y);
  }
}