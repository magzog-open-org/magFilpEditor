import { DrawableConfig, IDrawable, IDrawableConfig } from "./drawable";
import { ITextConfig, TextConfig } from "../config/textConfig";
import { IConfig } from "src/config/config";
import { EventListener } from "src/common/eventListener";
import { OffScreenCanvas } from "./canvasContext";

export interface IBlockConfig extends IDrawableConfig {
  text?: ITextConfig;
}

export class BlockConfig<T> extends DrawableConfig<T> implements IBlockConfig, IConfig {
  private _text: ITextConfig = new TextConfig();
  get text(): ITextConfig { return this._text; }
  set text(text: ITextConfig) { this._text = new TextConfig(text); }

  constructor(config?: IBlockConfig) {
    super(config);
    this.text = config?.text || this._text;
  }
}

export abstract class Block extends EventListener implements IDrawable {
  offScreenCanvas: OffScreenCanvas;

  constructor(config?: IBlockConfig) {
    super();
    this.offScreenCanvas = new OffScreenCanvas(config);
  }

  drawOffScreenCanvas(): void { console.log('Implement the method drawOffScreenCanvas()'); }
  draw(context: CanvasRenderingContext2D): void { console.log('Implement the method draw()'); }
}

