import { TComponent } from "./component";
import { DrawableConfig, IDrawable, IDrawableConfig } from "./drawable";
import { ITextConfig, TextConfig } from "../config/textConfig";
import { Default } from "src/common/defaults";
import { OffScreenCanvas } from "./canvasContext";
import { EventListener } from "src/common/eventListener";
import { Canvas } from "./canvas";
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

export class Layer extends EventListener implements IDrawable {
  private children: TComponent[] = [];
  offScreenCanvas: OffScreenCanvas;
  config: LayerConfig<ILayerConfig>;

  constructor(config?: ILayerConfig) {
    super();
    this.config = new LayerConfig<ILayerConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(this.config);
  }

  addBlock(child: TComponent): void {
    this.children.push(child);
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.lineWidth = Default.config.border.thickness;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  draw(context: CanvasRenderingContext2D): void {
    this.children.forEach((child) => child.draw(context));
  }
}
