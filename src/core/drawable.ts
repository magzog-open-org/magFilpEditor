
import { OffScreenCanvas } from "./offScreenCanvas";
import { Position, Size } from "../common/types";
import { Default } from "src/common/defaults";
import { FillConfig, IFillConfig } from "src/config/fillConfig";
import { BorderConfig, IBorderConfig } from "src/config/borderConfig";
import { Config } from "src/config/config";
import { Validator } from "src/common/validation";
import { HitCanvas } from "./canvas";

export interface IDrawableConfig {
  position: Position;
  size: Size;
  fill?: IFillConfig;
  border?: IBorderConfig;
  hitColor?: string;
}

export class DrawableConfig<T> extends Config<T> implements IDrawableConfig {
  private _position: Position = Default.config.position;
  private _size: Size = Default.config.size;
  private _fill: IFillConfig = Default.config.fill;
  private _border: IBorderConfig = Default.config.border;
  private _hitColor: string = Default.config.fill.color;

  get position(): Position { return this._position; }
  get size(): Size { return this._size; }
  get fill(): IFillConfig { return this._fill; }
  get border(): IBorderConfig { return this._border; }
  get hitColor():string { return this._hitColor; }

  set position(position: Position) { this._position = Validator.position(position); }
  set size(size: Size) { this._size = Validator.size(size); }
  set fill(fill: IFillConfig) { this._fill = new FillConfig(fill); }
  set border(border: IBorderConfig) { this._border = new BorderConfig(border); }
  // set hitColor(color: string) { this._hitColor = Validator.color(color); }

  constructor(config?: IDrawableConfig) {
    super();
    this.position = config?.position || this._position;
    this.size = config?.size || this._size;
    this.fill = config?.fill || this._fill;
    this.border = config?.border || this._border;
    this._hitColor = HitCanvas.getNextHitColor();
  }
}

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
