import { OffScreenCanvas } from "./offScreenCanvas";

export interface IDrawable {
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;
  drawOffScreenCanvas(): void;
  drawOffScreenHitCanvas(): void;
  draw(context: CanvasRenderingContext2D): void;
  drawHit(context: CanvasRenderingContext2D): void;
}

// export abstract class Drawable extends EventListener implements IDrawable {
//   offScreenCanvas: OffScreenCanvas;
//   config: DrawableConfig<IDrawableConfig>;
  
//   constructor(config?: IDrawableConfig) {
//     super();
//     this.config = new DrawableConfig<IDrawableConfig>(config);
//     this.offScreenCanvas = new OffScreenCanvas(this.config.size.width, this.config.size.height);
//   }

//   abstract drawOffScreenCanvas(): void;
//   abstract draw(context: CanvasRenderingContext2D): void;
// }
