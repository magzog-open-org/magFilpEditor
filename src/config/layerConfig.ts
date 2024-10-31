import { DrawableConfig, IDrawableConfig } from "./drawableConfig";
import { ITextConfig, TextConfig } from "./textConfig";
import { HtmlHelper } from "src/common/helpers";

export interface ILayerConfig extends IDrawableConfig {
  title?: ITextConfig;
}

export class LayerConfig<T> extends DrawableConfig<T> implements ILayerConfig {
  private _title: ITextConfig = new TextConfig();
  get title(): ITextConfig { return this._title; }
  set title(text: ITextConfig) { this._title = new TextConfig(text); }

  constructor(config?: ILayerConfig) {
    // Init
    if(config){ 
      config.position = { x: 0, y: 0 };
      config.size = HtmlHelper.getWindowSize();
    } else { 
      config = {
        position: { x: 0, y: 0 }, 
        size: HtmlHelper.getWindowSize()
      }; 
    }

    super(config);
    this._title = config?.title || this._title;
  }
}