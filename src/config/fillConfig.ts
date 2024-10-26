import { Validator } from "src/common/validation";
import { Config } from "./config";
import { Default } from "src/common/defaults";

export interface IFillConfig {
  opacity?: number;
  color?: string;
}

export class FillConfig<T> extends Config<T> implements IFillConfig {
  private _opacity: number = Default.config.fill.opacity;
  private _color: string = Default.config.fill.color;

  get opacity(): number { return this._opacity; }
  get color(): string { return this._color; }  

  set opacity(opacity: number) { this._opacity = Validator.opacity(opacity); }
  set color(color: string) { this._color = Validator.color(color); }

  constructor(config?: IFillConfig) {
    super();
    if (config){ this.setConfig(config); }
  }

  setConfig(config: IFillConfig): void {
    this.opacity = config.opacity || this._opacity;
    this.color = config.color || this._color;
  }
}
