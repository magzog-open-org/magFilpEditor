import { Default } from "src/common/defaults";
import { HtmlHelper } from "../common/helpers";
import { IDrawableConfig } from "./drawable";

export class CanvasContext {
  private context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    if (!context) { throw new Error("Failed to get 2D context"); }
    this.context = context;
  }

  get ctx(): CanvasRenderingContext2D {
    return this.context;
  }

  save(): void { this.context.save(); }
  restore(): void { this.context.restore(); }

  clear(width: number, height: number): void { this.context.clearRect(0, 0, width, height); }
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