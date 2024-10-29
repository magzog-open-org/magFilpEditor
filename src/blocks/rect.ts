import { Block, BlockConfig, IBlockConfig } from "src/core/block";
import { Position, Size } from "src/common/types";
import { Default } from "src/common/defaults";
import { OffScreenCanvas } from "src/core/offScreenCanvas";
import { IDrawable } from "src/core/drawable";
import { IEventListener } from "src/common/eventListener";

export interface IRectConfig extends IBlockConfig {
  // TODO: add more properties for Rect block
}

export class RectConfig<T> extends BlockConfig<T> implements IRectConfig {
  constructor(config?: IRectConfig) {
    super(config);
  }
}

export class Rect extends Block {
  config: RectConfig<IRectConfig>;
  offScreenCanvas: OffScreenCanvas;
  
  constructor(config?: IRectConfig) {
    super(config);
    this.config = new RectConfig<IRectConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(this.config);
    this.drawOffScreenCanvas();
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = Default.config.fill.color;
    this.offScreenCanvas.context.strokeStyle = Default.config.border.color;
    this.offScreenCanvas.context.lineWidth = Default.config.border.thickness;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenCanvas.element, this.config.position.x, this.config.position.y);
  }
}