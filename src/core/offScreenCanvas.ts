import { Default } from "src/common/defaults";
import { IDrawableConfig } from "./drawable";
import { HtmlHelper } from "src/common/helpers";

export class OffScreenCanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  constructor(config?: IDrawableConfig) {
    const size = config?.size || Default.config.size;
    ({ el: this.element, context: this.context } = HtmlHelper.createCanvasEl(size));
  }
}