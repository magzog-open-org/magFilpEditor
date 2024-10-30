import { Default } from "src/common/defaults";
import { IDrawableConfig } from "./drawable";
import { HtmlHelper } from "src/common/helpers";

export class OffScreenCanvas {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  constructor(config?: IDrawableConfig) {
    const size = config?.size || Default.config.size;
    this.element = HtmlHelper.createCanvasEl(size);
    this.context = this.element.getContext('2d') as CanvasRenderingContext2D;
  }
}