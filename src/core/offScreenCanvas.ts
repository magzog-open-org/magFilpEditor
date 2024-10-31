import { Default } from "src/common/defaults";
import { HtmlHelper } from "src/common/helpers";
import { Canvas } from "./canvas";
import { IDrawableConfig } from "src/config/drawableConfig";

export class OffScreenCanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  rootContext: CanvasRenderingContext2D;

  constructor(rootContext:CanvasRenderingContext2D, config?: IDrawableConfig) {
    const size = config?.size || Default.config.size;
    this.element = HtmlHelper.createCanvasEl(size);
    this.context = this.element.getContext('2d') as CanvasRenderingContext2D;
    this.rootContext = rootContext;
  }
}