import { Default } from "src/common/defaults";
import { HtmlHelper } from "../common/helpers";
import { IDrawableConfig } from "./drawable";

export class CanvasContext {
  private canvasEl: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvasElement: HTMLCanvasElement) {
    const context = canvasElement.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    this.context = context;
    this.canvasEl = canvasElement;
  }

  get ctx(): CanvasRenderingContext2D {
    return this.context;
  }

  save(): void { this.context.save(); }
  restore(): void { this.context.restore(); }

  clear(width: number, height: number): void {
    this.context.clearRect(0, 0, width, height);
  }
}

// export class SceneContext extends CanvasContext {
//   constructor(context: CanvasRenderingContext2D) {
//     super(context);
//   }
// }

// export class HitContext extends CanvasContext {
//   constructor(context: CanvasRenderingContext2D) {
//     super(context);
//   }
// }