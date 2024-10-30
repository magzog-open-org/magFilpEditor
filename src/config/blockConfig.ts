import { DrawableConfig, IDrawableConfig } from "../core/drawable";
import { ITextConfig, TextConfig } from "../config/textConfig";
import { IConfig } from "src/config/config";

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