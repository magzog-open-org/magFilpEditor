import { AlignHorizontal, AlignVertical, BorderStyle } from "src/common/types";
import { Position, Size } from "./types";

export class Validator {
  static opacity(opacity: number): number {
    return opacity <= 0 
      ? 0
      : opacity >= 1
        ? 1
        : opacity;
  }
  // TODO: implement.
  static color(color: string): string {
    return color;
  }
  // TODO: implement.
  static text(text: string): string {
    return text;
  }
  // TODO: implement.
  static fontSize(fontSize: number): number {
    return fontSize;
  }
  // TODO: implement.
  static fontFamily(fontFamily: string): string {
    return fontFamily;
  }
  // TODO: implement.
  static alignVertical(alignVertical: AlignVertical): AlignVertical {
    return alignVertical;
  }
  // TODO: implement.
  static alignHorizontal(alignHorizontal: AlignHorizontal): AlignHorizontal {
    return alignHorizontal;
  }
  // TODO: implement.
  static borderStyle(borderStyle: BorderStyle): BorderStyle {
    return borderStyle;
  }
  // TODO: implement.
  static thickness(thickness: number): number {
    return thickness;
  }
  // TODO: implement.
  static position(position: Position): Position {
    return position;
  }
  // TODO: implement.
  static size(size: Size): Size {
    if(size && typeof size.width === 'number' && typeof size.height === 'number'){
      return size;
    }
    
    throw Error('Invalid size: width and height must be numbers')
  }
}
