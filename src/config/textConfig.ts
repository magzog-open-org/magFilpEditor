import { Default } from "src/common/defaults";
import { Config, IConfig } from "./config";
import { Validator } from "src/common/validation";
import { AlignHorizontal, AlignVertical } from "src/common/types";

export interface ITextConfig {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  highlightColor?: string;
  alignVertical?: AlignVertical;
  alignHorizontal?: AlignHorizontal 
}
export interface ITextAlignmentConfig {
  horizontal?: AlignHorizontal;
  vertical?: AlignVertical;
}

export class TextConfig<T> extends Config<T> implements ITextConfig {
  private _text: string = Default.config.text.value;
  private _fontSize: number = Default.config.font.size;
  private _fontFamily: string = Default.config.font.family;
  private _color: string = Default.config.fill.color;
  private _highlightColor: string = Default.config.text.highlightColor;
  private _alignVertical: AlignVertical = Default.config.text.alignment.vertical;
  private _alignHorizontal: AlignHorizontal = Default.config.text.alignment.horizontal;

  get text(): string { return this._text; }
  get fontSize(): number { return this._fontSize; }
  get fontFamily(): string { return this._fontFamily; }
  get color(): string { return this._color; }
  get highlightColor(): string { return this._highlightColor; }
  get alignVertical(): AlignVertical { return this._alignVertical; }
  get alignHorizontal(): AlignHorizontal { return this._alignHorizontal; }

  set text(text: string) { this._text = Validator.text(text); }
  set fontSize(fontSize: number) { this._fontSize = Validator.fontSize(fontSize); }
  set fontFamily(fontFamily: string) { this._fontFamily = Validator.fontFamily(fontFamily); }
  set color(color: string) { this._color = Validator.color(color); }
  set highlightColor(highlightColor: string) { this._highlightColor = Validator.color(highlightColor); }
  set alignVertical(alignVertical: AlignVertical) { this._alignVertical = Validator.alignVertical(alignVertical); }
  set alignHorizontal(alignHorizontal: AlignHorizontal) { this._alignHorizontal = Validator.alignHorizontal(alignHorizontal); }

  constructor(config?: ITextConfig) {
    super();
    this.text = config?.text || this._text;
    this.fontSize = config?.fontSize || this._fontSize;
    this.fontFamily = config?.fontFamily || this._fontFamily;
    this.color = config?.color || this._color;
    this.highlightColor = config?.highlightColor || this._highlightColor;
    this.alignVertical = config?.alignVertical || this._alignVertical;
    this.alignHorizontal = config?.alignHorizontal || this._alignHorizontal;
  }
}
