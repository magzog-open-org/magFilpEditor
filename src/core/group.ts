import { IDrawable } from "./drawable";
import { TComponent } from "./component";
import { OffScreenCanvas } from "./offScreenCanvas";
import { Default } from "src/common/defaults";
import { Base } from "./base";
import { GroupConfig, IGroupConfig } from "src/config/groupConfig";

export class Group extends Base implements IDrawable {
  children: TComponent[] = [];
  offScreenCanvas: OffScreenCanvas;
  offScreenHitCanvas: OffScreenCanvas;
  config: GroupConfig<IGroupConfig>;

  constructor(config?: IGroupConfig) {
    super();
    this.config = new GroupConfig<IGroupConfig>(config);
    this.offScreenCanvas = new OffScreenCanvas(this.config);
    this.offScreenHitCanvas = new OffScreenCanvas(this.config);
  }

  add(child: TComponent): void {
    this.children.push(child);
  }

  drawOffScreenCanvas(): void {
    this.offScreenCanvas.context.fillStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.lineWidth = Default.config.border.thickness;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
  }

  drawOffScreenHitCanvas(): void {
    this.offScreenCanvas.context.fillStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.offScreenCanvas.context.lineWidth = Default.config.border.thickness;
    this.offScreenCanvas.context.fillRect(0, 0, this.config.size.width, this.config.size.height);
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