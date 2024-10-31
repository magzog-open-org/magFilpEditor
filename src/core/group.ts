import { IDrawable } from "./drawable";
import { TComponent } from "./component";
import { OffScreenCanvas } from "./offScreenCanvas";
import { Base } from "./base";
import { HitCanvas } from "./hitCanvas";
import { SceneCanvas } from "./sceneCanvas";
import { GroupConfig, IGroupConfig } from "src/config/groupConfig";

export class Group extends Base implements IDrawable {
  children: TComponent[] = [];
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;
  config: GroupConfig<IGroupConfig>;

  constructor(config?: IGroupConfig) {
    super();
    this.config = new GroupConfig<IGroupConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(SceneCanvas.canvas.getContext(), this.config);
    this.offScreenHitCanvas = new OffScreenCanvas(HitCanvas.canvas.getContext(), this.config);
    this.setEvents();
  }

  private setEvents(): void {
    // this.addListener("addBlock", () => {  });
  }


  addBlock(child: TComponent): void {
    this.children.push(child);
    this.drawOffScreenCanvas();
    this.draw(this.offScreenCanvas.context);
    this.drawOffScreenHitCanvas();
    this.drawHit(this.offScreenHitCanvas.context);
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.lineWidth = 0;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  drawOffScreenHitCanvas(): void {
    this.offScreenHitCanvas.context.fillStyle = this.config.hitColor;
    this.offScreenHitCanvas.context.strokeStyle = this.config.hitColor;
    this.offScreenHitCanvas.context.lineWidth = 0;
    this.offScreenHitCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenCanvas.element, this.config.position.x, this.config.position.y);
    this.children.forEach((child) => child.draw(context));
  }

  drawHit(context: CanvasRenderingContext2D): void {
    context.drawImage(this.offScreenHitCanvas.element, this.config.position.x, this.config.position.y);
    this.children.forEach((child) => child.drawHit(context));
  }
}