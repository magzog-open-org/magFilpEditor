import { Validator } from "src/common/validation";
import { Config, IConfig } from "./config";
import { Default } from "src/common/defaults";

export interface IBorderConfig {
  style?: BorderStyle;
  opacity?: number;
  thickness?: number;
  color?: string;
}

export enum BorderStyle {
  SOLID = "solid",
  DASHED = "dashed",
}

export class BorderConfig<T> extends Config<T> implements IBorderConfig {
  private _style: BorderStyle = Default.config.border.style;
  private _opacity: number = Default.config.border.opacity;
  private _thickness: number = Default.config.border.thickness;
  private _color: string = Default.config.border.color;

  get style(): BorderStyle { return this._style; }
  get opacity(): number { return this._opacity; }
  get thickness(): number { return this._thickness; }
  get color(): string { return this._color; }

  set style(style: BorderStyle) { this._style = Validator.borderStyle(style); }
  set opacity(opacity: number) { this._opacity = Validator.opacity(opacity); }
  set thickness(thickness: number) { this._thickness = Validator.thickness(thickness); }
  set color(color: string) { this._color = Validator.color(color); }

  constructor(config?: IBorderConfig) {
    super();
    if (config){ this.setConfig(config); }
  }

  setConfig(config: IBorderConfig): void {
    this.style = config.style || this._style;
    this.opacity = config.opacity || this._opacity;
    this.thickness = config.thickness || this._thickness;
    this.color = config.color || this._color;
  }
}
