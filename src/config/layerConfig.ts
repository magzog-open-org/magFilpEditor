import { DrawableConfig, IDrawableConfig } from "../core/drawable";
import { ITextConfig, TextConfig } from "../config/textConfig";
import { HtmlHelper } from "src/common/helpers";
import { IConfig } from "src/config/config";

export interface ILayerConfig extends IDrawableConfig {
  title?: ITextConfig;
}

export class LayerConfig<T> extends DrawableConfig<T> implements ILayerConfig, IConfig {
  private _title: ITextConfig = new TextConfig();
  get title(): ITextConfig { return this._title; }
  set title(text: ITextConfig) { this._title = new TextConfig(text); }

  constructor(config?: ILayerConfig) {
    // Init
    if(config){ 
      config.position = { x: 0, y: 0 };
      config.size = HtmlHelper.getWindowSize(); 
    }
    else { 
      config = {
        position: { x: 0, y: 0 }, 
        size: HtmlHelper.getWindowSize()
      }; 
    }

    super(config);
    this._title = config?.title || this._title;
  }
}
