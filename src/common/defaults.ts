import { BorderStyle } from "src/config/borderConfig";

export const Default = {
  config: {
    get position() { return structuredClone(this._position); },
    get size() { return structuredClone(this._size); },
    get font() { return structuredClone(this._font); },
    get text() { return structuredClone(this._text); },
    get fill() { return structuredClone(this._fill); },
    get border() { return structuredClone(this._border); },
    _position: {
      x: 0,
      y: 0,
    },
    _size: {
      width: 0,
      height: 0,
    },
    _font: {
      size: 12,
      family: 'Arial',
      color: '#000000',
    },  
    _text: {
      highlightColor: '#FFFF00',
      value: '',
      alignment: {
        horizontal: 'left' as 'left' | 'center' | 'right',
        vertical: 'top' as 'top' | 'middle' | 'bottom',
      },
    },
    _fill: {
      opacity: 1,
      color: '#C02626FF',
    },
    _border: {
      style: BorderStyle.SOLID,
      opacity: 1,
      thickness: 1,
      color: '#000000',
    },
  }
}

