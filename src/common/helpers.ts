import { Position, Size } from "./types";

export class HtmlHelper {
  static createCanvasEl(size: Size): { el: HTMLCanvasElement, context: CanvasRenderingContext2D } {
    const canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    return { el: canvas, context: canvas.getContext('2d') as CanvasRenderingContext2D };
  }
  static createImageEl(): HTMLImageElement { return document.createElement('img'); }
  static getWindowCenter = (): Position => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  static getWindowSize = (): Size => ({ width: window.innerWidth, height: window.innerHeight });
}

export class CssHelper {
  static getVar(name: string) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  static setVar(name: string, value: string) { document.documentElement.style.setProperty(name, value); }
}

export class JsHelper {

}


/**
 * This page is based on part of the Konva.js library.
 * The original code can be found at https://konvajs.org/.
 */
/**
 * Transform constructor.
 * @constructor
 * @param {Array} [m] Optional six-element matrix
 */
// export class Transform {
//   m: Array<number>;
//   dirty = false;
//   constructor(m = [1, 0, 0, 1, 0, 0]) {
//     this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0];
//   }
//   reset() {
//     this.m[0] = 1;
//     this.m[1] = 0;
//     this.m[2] = 0;
//     this.m[3] = 1;
//     this.m[4] = 0;
//     this.m[5] = 0;
//   }
//   /**
//    * Copy Transform object
//    * @method
//    * @returns {Transform}
//    * @example
//    * const tr = shape.getTransform().copy()
//    */
//   copy() { return new Transform(this.m); }
//   copyInto(tr: Transform) {
//     tr.m[0] = this.m[0];
//     tr.m[1] = this.m[1];
//     tr.m[2] = this.m[2];
//     tr.m[3] = this.m[3];
//     tr.m[4] = this.m[4];
//     tr.m[5] = this.m[5];
//   }
//   /**
//    * Transform point
//    * @method
//    * @param {Object} point 2D point(x, y)
//    * @returns {Object} 2D point(x, y)
//    */
//   point(point: Vector2d) {
//     const m = this.m;
//     return {
//       x: m[0] * point.x + m[2] * point.y + m[4],
//       y: m[1] * point.x + m[3] * point.y + m[5],
//     };
//   }
//   /**
//    * Apply translation
//    * @method
//    * @param {Number} x
//    * @param {Number} y
//    * @returns {Transform}
//    */
//   translate(x: number, y: number) {
//     this.m[4] += this.m[0] * x + this.m[2] * y;
//     this.m[5] += this.m[1] * x + this.m[3] * y;
//     return this;
//   }
//   /**
//    * Apply scale
//    * @method
//    * @name Transform#scale
//    * @param {Number} sx
//    * @param {Number} sy
//    * @returns {Transform}
//    */
//   scale(sx: number, sy: number) {
//     this.m[0] *= sx;
//     this.m[1] *= sx;
//     this.m[2] *= sy;
//     this.m[3] *= sy;
//     return this;
//   }
//   /**
//    * Apply rotation
//    * @method
//    * @param {Number} rad  Angle in radians
//    * @returns {Transform}
//    */
//   rotate(rad: number) {
//     const c = Math.cos(rad);
//     const s = Math.sin(rad);
//     const m11 = this.m[0] * c + this.m[2] * s;
//     const m12 = this.m[1] * c + this.m[3] * s;
//     const m21 = this.m[0] * -s + this.m[2] * c;
//     const m22 = this.m[1] * -s + this.m[3] * c;
//     this.m[0] = m11;
//     this.m[1] = m12;
//     this.m[2] = m21;
//     this.m[3] = m22;
//     return this;
//   }
//   /**
//    * Returns the translation
//    * @method
//    * @name Transform#getTranslation
//    * @returns {Object} 2D point(x, y)
//    */
//   getTranslation() {
//     return {
//       x: this.m[4],
//       y: this.m[5],
//     };
//   }
//   /**
//    * Apply skew
//    * @method
//    * @name Transform#skew
//    * @param {Number} sx
//    * @param {Number} sy
//    * @returns {Transform}
//    */
//   skew(sx: number, sy: number) {
//     const m11 = this.m[0] + this.m[2] * sy;
//     const m12 = this.m[1] + this.m[3] * sy;
//     const m21 = this.m[2] + this.m[0] * sx;
//     const m22 = this.m[3] + this.m[1] * sx;
//     this.m[0] = m11;
//     this.m[1] = m12;
//     this.m[2] = m21;
//     this.m[3] = m22;
//     return this;
//   }
//   /**
//    * Transform multiplication
//    * @method
//    * @param {Transform} matrix
//    * @returns {Transform}
//    */
//   multiply(matrix: Transform) {
//     const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
//     const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

//     const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
//     const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

//     const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
//     const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

//     this.m[0] = m11;
//     this.m[1] = m12;
//     this.m[2] = m21;
//     this.m[3] = m22;
//     this.m[4] = dx;
//     this.m[5] = dy;
//     return this;
//   }
//   /**
//    * Invert the matrix
//    * @method
//    * @name Transform#invert
//    * @returns {Transform}
//    */
//   invert() {
//     const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
//     const m0 = this.m[3] * d;
//     const m1 = -this.m[1] * d;
//     const m2 = -this.m[2] * d;
//     const m3 = this.m[0] * d;
//     const m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
//     const m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
//     this.m[0] = m0;
//     this.m[1] = m1;
//     this.m[2] = m2;
//     this.m[3] = m3;
//     this.m[4] = m4;
//     this.m[5] = m5;
//     return this;
//   }
//   /**
//    * return matrix
//    * @method
//    * @name Transform#getMatrix
//    */
//   getMatrix() {
//     return this.m;
//   }
//   /**
//    * convert transformation matrix back into node's attributes
//    * @method
//    * @name Transform#decompose
//    * @returns {Transform}
//    */
//   decompose() {
//     const a = this.m[0];
//     const b = this.m[1];
//     const c = this.m[2];
//     const d = this.m[3];
//     const e = this.m[4];
//     const f = this.m[5];

//     const delta = a * d - b * c;

//     const result = {
//       x: e,
//       y: f,
//       rotation: 0,
//       scaleX: 0,
//       scaleY: 0,
//       skewX: 0,
//       skewY: 0,
//     };

//     // Apply the QR-like decomposition.
//     if (a != 0 || b != 0) {
//       const r = Math.sqrt(a * a + b * b);
//       result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
//       result.scaleX = r;
//       result.scaleY = delta / r;
//       result.skewX = (a * c + b * d) / delta;
//       result.skewY = 0;
//     } else if (c != 0 || d != 0) {
//       const s = Math.sqrt(c * c + d * d);
//       result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
//       result.scaleX = delta / s;
//       result.scaleY = s;
//       result.skewX = 0;
//       result.skewY = (a * c + b * d) / delta;
//     } else {
//       // a = b = c = d = 0
//     }

//     return result;
//   }
// }

// // CONSTANTS
// let OBJECT_ARRAY = '[object Array]',
//   OBJECT_NUMBER = '[object Number]',
//   OBJECT_STRING = '[object String]',
//   OBJECT_BOOLEAN = '[object Boolean]',
//   PI_OVER_DEG180 = Math.PI / 180,
//   DEG180_OVER_PI = 180 / Math.PI,
//   HASH = '#',
//   EMPTY_STRING = '',
//   ZERO = '0',
//   RGB_PAREN = 'rgb(',
//   COLORS = {
//     aliceblue: [240, 248, 255],
//     antiquewhite: [250, 235, 215],
//     aqua: [0, 255, 255],
//     aquamarine: [127, 255, 212],
//     azure: [240, 255, 255],
//     beige: [245, 245, 220],
//     bisque: [255, 228, 196],
//     black: [0, 0, 0],
//     blanchedalmond: [255, 235, 205],
//     blue: [0, 0, 255],
//     blueviolet: [138, 43, 226],
//     brown: [165, 42, 42],
//     burlywood: [222, 184, 135],
//     cadetblue: [95, 158, 160],
//     chartreuse: [127, 255, 0],
//     chocolate: [210, 105, 30],
//     coral: [255, 127, 80],
//     cornflowerblue: [100, 149, 237],
//     cornsilk: [255, 248, 220],
//     crimson: [220, 20, 60],
//     cyan: [0, 255, 255],
//     darkblue: [0, 0, 139],
//     darkcyan: [0, 139, 139],
//     darkgoldenrod: [184, 132, 11],
//     darkgray: [169, 169, 169],
//     darkgreen: [0, 100, 0],
//     darkgrey: [169, 169, 169],
//     darkkhaki: [189, 183, 107],
//     darkmagenta: [139, 0, 139],
//     darkolivegreen: [85, 107, 47],
//     darkorange: [255, 140, 0],
//     darkorchid: [153, 50, 204],
//     darkred: [139, 0, 0],
//     darksalmon: [233, 150, 122],
//     darkseagreen: [143, 188, 143],
//     darkslateblue: [72, 61, 139],
//     darkslategray: [47, 79, 79],
//     darkslategrey: [47, 79, 79],
//     darkturquoise: [0, 206, 209],
//     darkviolet: [148, 0, 211],
//     deeppink: [255, 20, 147],
//     deepskyblue: [0, 191, 255],
//     dimgray: [105, 105, 105],
//     dimgrey: [105, 105, 105],
//     dodgerblue: [30, 144, 255],
//     firebrick: [178, 34, 34],
//     floralwhite: [255, 255, 240],
//     forestgreen: [34, 139, 34],
//     fuchsia: [255, 0, 255],
//     gainsboro: [220, 220, 220],
//     ghostwhite: [248, 248, 255],
//     gold: [255, 215, 0],
//     goldenrod: [218, 165, 32],
//     gray: [128, 128, 128],
//     green: [0, 128, 0],
//     greenyellow: [173, 255, 47],
//     grey: [128, 128, 128],
//     honeydew: [240, 255, 240],
//     hotpink: [255, 105, 180],
//     indianred: [205, 92, 92],
//     indigo: [75, 0, 130],
//     ivory: [255, 255, 240],
//     khaki: [240, 230, 140],
//     lavender: [230, 230, 250],
//     lavenderblush: [255, 240, 245],
//     lawngreen: [124, 252, 0],
//     lemonchiffon: [255, 250, 205],
//     lightblue: [173, 216, 230],
//     lightcoral: [240, 128, 128],
//     lightcyan: [224, 255, 255],
//     lightgoldenrodyellow: [250, 250, 210],
//     lightgray: [211, 211, 211],
//     lightgreen: [144, 238, 144],
//     lightgrey: [211, 211, 211],
//     lightpink: [255, 182, 193],
//     lightsalmon: [255, 160, 122],
//     lightseagreen: [32, 178, 170],
//     lightskyblue: [135, 206, 250],
//     lightslategray: [119, 136, 153],
//     lightslategrey: [119, 136, 153],
//     lightsteelblue: [176, 196, 222],
//     lightyellow: [255, 255, 224],
//     lime: [0, 255, 0],
//     limegreen: [50, 205, 50],
//     linen: [250, 240, 230],
//     magenta: [255, 0, 255],
//     maroon: [128, 0, 0],
//     mediumaquamarine: [102, 205, 170],
//     mediumblue: [0, 0, 205],
//     mediumorchid: [186, 85, 211],
//     mediumpurple: [147, 112, 219],
//     mediumseagreen: [60, 179, 113],
//     mediumslateblue: [123, 104, 238],
//     mediumspringgreen: [0, 250, 154],
//     mediumturquoise: [72, 209, 204],
//     mediumvioletred: [199, 21, 133],
//     midnightblue: [25, 25, 112],
//     mintcream: [245, 255, 250],
//     mistyrose: [255, 228, 225],
//     moccasin: [255, 228, 181],
//     navajowhite: [255, 222, 173],
//     navy: [0, 0, 128],
//     oldlace: [253, 245, 230],
//     olive: [128, 128, 0],
//     olivedrab: [107, 142, 35],
//     orange: [255, 165, 0],
//     orangered: [255, 69, 0],
//     orchid: [218, 112, 214],
//     palegoldenrod: [238, 232, 170],
//     palegreen: [152, 251, 152],
//     paleturquoise: [175, 238, 238],
//     palevioletred: [219, 112, 147],
//     papayawhip: [255, 239, 213],
//     peachpuff: [255, 218, 185],
//     peru: [205, 133, 63],
//     pink: [255, 192, 203],
//     plum: [221, 160, 203],
//     powderblue: [176, 224, 230],
//     purple: [128, 0, 128],
//     rebeccapurple: [102, 51, 153],
//     red: [255, 0, 0],
//     rosybrown: [188, 143, 143],
//     royalblue: [65, 105, 225],
//     saddlebrown: [139, 69, 19],
//     salmon: [250, 128, 114],
//     sandybrown: [244, 164, 96],
//     seagreen: [46, 139, 87],
//     seashell: [255, 245, 238],
//     sienna: [160, 82, 45],
//     silver: [192, 192, 192],
//     skyblue: [135, 206, 235],
//     slateblue: [106, 90, 205],
//     slategray: [119, 128, 144],
//     slategrey: [119, 128, 144],
//     snow: [255, 255, 250],
//     springgreen: [0, 255, 127],
//     steelblue: [70, 130, 180],
//     tan: [210, 180, 140],
//     teal: [0, 128, 128],
//     thistle: [216, 191, 216],
//     transparent: [255, 255, 255, 0],
//     tomato: [255, 99, 71],
//     turquoise: [64, 224, 208],
//     violet: [238, 130, 238],
//     wheat: [245, 222, 179],
//     white: [255, 255, 255],
//     whitesmoke: [245, 245, 245],
//     yellow: [255, 255, 0],
//     yellowgreen: [154, 205, 5],
//   },
//   RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
//   animQueue: Array<Function> = [];

// export class Util {
//   private constructor() {}
//   /*
//    * cherry-picked utilities from underscore.js
//    */
//   static isElement(obj: any): obj is Element { return !!(obj && obj.nodeType == 1); }
//   static isFunction(obj: any) { return !!(obj && obj.constructor && obj.call && obj.apply); }
//   static isPlainObject(obj: any) { return !!obj && obj.constructor === Object; }
//   static isArray(obj: any): obj is Array<any> { return Object.prototype.toString.call(obj) === OBJECT_ARRAY; }
//   static isNumber(obj: any): obj is number {
//     return (
//       Object.prototype.toString.call(obj) === OBJECT_NUMBER &&
//       !isNaN(obj) &&
//       isFinite(obj)
//     );
//   }
//   static isString(obj: any): obj is string { return Object.prototype.toString.call(obj) === OBJECT_STRING; }
//   static isBoolean(obj: any): obj is boolean { return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN; }
//   // arrays are objects too
//   static isObject(val: any): val is object { return val instanceof Object; }
//   static isValidSelector(selector: any) {
//     if (typeof selector !== 'string') {
//       return false;
//     }
//     const firstChar = selector[0];
//     return (
//       firstChar === '#' ||
//       firstChar === '.' ||
//       firstChar === firstChar.toUpperCase()
//     );
//   }
//   static sign(number: number) {
//     if (number === 0) {
//       // that is not what sign usually returns
//       // but that is what we need
//       return 1;
//     }
//     if (number > 0) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }

//   // requestAnimFrame(callback: Function) {
//   //   animQueue.push(callback);
//   //   if (animQueue.length === 1) {
//   //     req(function () {
//   //       const queue = animQueue;
//   //       animQueue = [];
//   //       queue.forEach(function (cb) {
//   //         cb();
//   //       });
//   //     });
//   //   }
//   // },
//   static isInDocument(el: any) {
//     while ((el = el.parentNode)) {
//       if (el == document) {
//         return true;
//       }
//     }
//     return false;
//   }

//   /*
//    * arg can be an image object or image data
//    */
//   static urlToImage(url: string, callback: Function) {
//     // if arg is a string, then it's a data url
//     const imageObj = HtmlElement.createImageEl();
//     imageObj.onload = function () {
//       callback(imageObj);
//     };
//     imageObj.src = url;
//   }
//   static rgbToHex(r: number, g: number, b: number) { return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); }
//   static hexToRgb(hex: string): RGB {
//     hex = hex.replace(HASH, EMPTY_STRING);
//     const bigint = parseInt(hex, 16);
//     return {
//       r: (bigint >> 16) & 255,
//       g: (bigint >> 8) & 255,
//       b: bigint & 255,
//     };
//   }
//   /**
//    * return random hex color
//    * @method
//    * @example
//    */
//   static getRandomColor() {
//     let randColor = ((Math.random() * 0xffffff) << 0).toString(16);
//     while (randColor.length < 6) {
//       randColor = ZERO + randColor;
//     }
//     return HASH + randColor;
//   }

//   /**
//    * get RGB components of a color
//    * @method
//    * @param {String} color
//    * @example
//    * // each of the following examples return {r:0, g:0, b:255}
//    * var rgb = Util.getRGB('blue');
//    * var rgb = Util.getRGB('#0000ff');
//    * var rgb = Util.getRGB('rgb(0,0,255)');
//    */
//   static getRGB(color: string): RGB {
//     let rgb;
//     // color string
//     if (color in COLORS) {
//       rgb = COLORS[color as keyof typeof COLORS];
//       return {
//         r: rgb[0],
//         g: rgb[1],
//         b: rgb[2],
//       };
//     } else if (color[0] === HASH) {
//       // hex
//       return this.hexToRgb(color.substring(1));
//     } else if (color.substr(0, 4) === RGB_PAREN) {
//       // rgb string
//       rgb = RGB_REGEX.exec(color.replace(/ /g, '')) as RegExpExecArray;
//       return {
//         r: parseInt(rgb[1], 10),
//         g: parseInt(rgb[2], 10),
//         b: parseInt(rgb[3], 10),
//       };
//     } else {
//       // default
//       return {
//         r: 0,
//         g: 0,
//         b: 0,
//       };
//     }
//   }
//   // convert any color string to RGBA object
//   // from https://github.com/component/color-parser
//   colorToRGBA(str: string) {
//     str = str || 'black';
//     return (
//       Util.namedColorToRBA(str) ||
//       Util.hex3ColorToRGBA(str) ||
//       Util.hex4ColorToRGBA(str) ||
//       Util.hex6ColorToRGBA(str) ||
//       Util.hex8ColorToRGBA(str) ||
//       Util.rgbColorToRGBA(str) ||
//       Util.rgbaColorToRGBA(str) ||
//       Util.hslColorToRGBA(str)
//     );
//   }
//   // Parse named css color. Like "green"
//   static namedColorToRBA(str: string) {
//     const c = COLORS[str.toLowerCase() as keyof typeof COLORS];
//     if (!c) {
//       return null;
//     }
//     return {
//       r: c[0],
//       g: c[1],
//       b: c[2],
//       a: 1,
//     };
//   }
//   // Parse rgb(n, n, n)
//   static rgbColorToRGBA(str: string) {
//     if (str.indexOf('rgb(') === 0) {
//       str = str.match(/rgb\(([^)]+)\)/)![1];
//       const parts = str.split(/ *, */).map(Number);
//       return {
//         r: parts[0],
//         g: parts[1],
//         b: parts[2],
//         a: 1,
//       };
//     }
//   }
//   // Parse rgba(n, n, n, n)
//   static rgbaColorToRGBA(str: string) {
//     if (str.indexOf('rgba(') === 0) {
//       str = str.match(/rgba\(([^)]+)\)/)![1]!;
//       const parts = str.split(/ *, */).map((n, index) => {
//         if (n.slice(-1) === '%') {
//           return index === 3 ? parseInt(n) / 100 : (parseInt(n) / 100) * 255;
//         }
//         return Number(n);
//       });
//       return {
//         r: parts[0],
//         g: parts[1],
//         b: parts[2],
//         a: parts[3],
//       };
//     }
//   }
//   // Parse #nnnnnnnn
//   static hex8ColorToRGBA(str: string) {
//     if (str[0] === '#' && str.length === 9) {
//       return {
//         r: parseInt(str.slice(1, 3), 16),
//         g: parseInt(str.slice(3, 5), 16),
//         b: parseInt(str.slice(5, 7), 16),
//         a: parseInt(str.slice(7, 9), 16) / 0xff,
//       };
//     }
//   }
//   // Parse #nnnnnn
//   static hex6ColorToRGBA(str: string) {
//     if (str[0] === '#' && str.length === 7) {
//       return {
//         r: parseInt(str.slice(1, 3), 16),
//         g: parseInt(str.slice(3, 5), 16),
//         b: parseInt(str.slice(5, 7), 16),
//         a: 1,
//       };
//     }
//   }
//   // Parse #nnnn
//   static hex4ColorToRGBA(str: string) {
//     if (str[0] === '#' && str.length === 5) {
//       return {
//         r: parseInt(str[1] + str[1], 16),
//         g: parseInt(str[2] + str[2], 16),
//         b: parseInt(str[3] + str[3], 16),
//         a: parseInt(str[4] + str[4], 16) / 0xff,
//       };
//     }
//   }
//   // Parse #nnn
//   static hex3ColorToRGBA(str: string) {
//     if (str[0] === '#' && str.length === 4) {
//       return {
//         r: parseInt(str[1] + str[1], 16),
//         g: parseInt(str[2] + str[2], 16),
//         b: parseInt(str[3] + str[3], 16),
//         a: 1,
//       };
//     }
//   }
//   // Code adapted from https://github.com/Qix-/color-convert/blob/master/conversions.js#L244
//   static hslColorToRGBA(str: string) {
//     // Check hsl() format
//     if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
//       // Extract h, s, l
//       const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str)!;

//       const h = Number(hsl[0]) / 360;
//       const s = Number(hsl[1]) / 100;
//       const l = Number(hsl[2]) / 100;

//       let t2;
//       let t3;
//       let val;

//       if (s === 0) {
//         val = l * 255;
//         return {
//           r: Math.round(val),
//           g: Math.round(val),
//           b: Math.round(val),
//           a: 1,
//         };
//       }

//       if (l < 0.5) {
//         t2 = l * (1 + s);
//       } else {
//         t2 = l + s - l * s;
//       }

//       const t1 = 2 * l - t2;

//       const rgb = [0, 0, 0];
//       for (let i = 0; i < 3; i++) {
//         t3 = h + (1 / 3) * -(i - 1);
//         if (t3 < 0) {
//           t3++;
//         }

//         if (t3 > 1) {
//           t3--;
//         }

//         if (6 * t3 < 1) {
//           val = t1 + (t2 - t1) * 6 * t3;
//         } else if (2 * t3 < 1) {
//           val = t2;
//         } else if (3 * t3 < 2) {
//           val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
//         } else {
//           val = t1;
//         }

//         rgb[i] = val * 255;
//       }

//       return {
//         r: Math.round(rgb[0]),
//         g: Math.round(rgb[1]),
//         b: Math.round(rgb[2]),
//         a: 1,
//       };
//     }
//   }
//   /**
//    * check intersection of two client rectangles
//    * @method
//    * @param {Object} r1 - { x, y, width, height } client rectangle
//    * @param {Object} r2 - { x, y, width, height } client rectangle
//    * @example
//    * const overlapping = Util.haveIntersection(shape1.getClientRect(), shape2.getClientRect());
//    */
//   static haveIntersection(r1: IRect, r2: IRect) {
//     return !(
//       r2.x > r1.x + r1.width ||
//       r2.x + r2.width < r1.x ||
//       r2.y > r1.y + r1.height ||
//       r2.y + r2.height < r1.y
//     );
//   }
//   static cloneObject<Any>(obj: Any): Any {
//     const retObj: any = {};
//     for (const key in obj) {
//       if (this.isPlainObject(obj[key])) {
//         retObj[key] = this.cloneObject(obj[key]);
//       } else if (this.isArray(obj[key])) {
//         retObj[key] = this.cloneArray(obj[key] as Array<any>);
//       } else {
//         retObj[key] = obj[key];
//       }
//     }
//     return retObj;
//   }
//   static cloneArray(arr: Array<any>) { return arr.slice(0); }
//   static degToRad(deg: number) { return deg * PI_OVER_DEG180; }
//   static radToDeg(rad: number) { return rad * DEG180_OVER_PI; }
//   static capitalize(str: string) { return str.charAt(0).toUpperCase() + str.slice(1); }
//   static each(obj: object, func: Function) {
//     for (const key in obj) {
//       func(key, obj[key as keyof typeof obj]);
//     }
//   }
//   static inRange(val: number, left: number, right: number) { return left <= val && val < right; }
//   static getProjectionToSegment(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
//     let x, y, dist;

//     const pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
//     if (pd2 == 0) {
//       x = x1;
//       y = y1;
//       dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
//     } else {
//       const u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
//       if (u < 0) {
//         x = x1;
//         y = y1;
//         dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
//       } else if (u > 1.0) {
//         x = x2;
//         y = y2;
//         dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
//       } else {
//         x = x1 + u * (x2 - x1);
//         y = y1 + u * (y2 - y1);
//         dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
//       }
//     }
//     return [x, y, dist];
//   }
//   // line as array of points.
//   // line might be closed
//   static getProjectionToLine(pt: Vector2d, line: Array<Vector2d>, isClosed: boolean) {
//     const pc = Util.cloneObject(pt);
//     let dist = Number.MAX_VALUE;
//     line.forEach(function (p1, i) {
//       if (!isClosed && i === line.length - 1) {
//         return;
//       }
//       const p2 = line[(i + 1) % line.length];
//       const proj = Util.getProjectionToSegment(
//         p1.x,
//         p1.y,
//         p2.x,
//         p2.y,
//         pt.x,
//         pt.y
//       );
//       const px = proj[0],
//         py = proj[1],
//         pdist = proj[2];
//       if (pdist < dist) {
//         pc.x = px;
//         pc.y = py;
//         dist = pdist;
//       }
//     });
//     return pc;
//   }
//   static prepareArrayForTween(startArray: Array<number>, endArray: Array<number>, isClosed: boolean) {
//     let n,
//       start: Vector2d[] = [],
//       end: Vector2d[] = [];
//     if (startArray.length > endArray.length) {
//       const temp = endArray;
//       endArray = startArray;
//       startArray = temp;
//     }
//     for (n = 0; n < startArray.length; n += 2) {
//       start.push({
//         x: startArray[n],
//         y: startArray[n + 1],
//       });
//     }
//     for (n = 0; n < endArray.length; n += 2) {
//       end.push({
//         x: endArray[n],
//         y: endArray[n + 1],
//       });
//     }

//     const newStart: number[] = [];
//     end.forEach(function (point) {
//       const pr = Util.getProjectionToLine(point, start, isClosed);
//       newStart.push(pr.x);
//       newStart.push(pr.y);
//     });
//     return newStart;
//   }
//   static prepareToStringify<T>(obj: any): T | null {
//     let desc;

//     obj.visitedByCircularReferenceRemoval = true;

//     for (const key in obj) {
//       if (
//         !(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')
//       ) {
//         continue;
//       }
//       desc = Object.getOwnPropertyDescriptor(obj, key);
//       if (
//         obj[key].visitedByCircularReferenceRemoval ||
//         Util.isElement(obj[key])
//       ) {
//         if (desc?.configurable) {
//           delete obj[key];
//         } else {
//           return null;
//         }
//       } else if (Util.prepareToStringify(obj[key]) === null) {
//         if (desc?.configurable) {
//           delete obj[key];
//         } else {
//           return null;
//         }
//       }
//     }

//     delete obj.visitedByCircularReferenceRemoval;

//     return obj;
//   }
//   // very simplified version of Object.assign
//   static staticassign<T, U>(target: T, source: U) {
//     for (const key in source) {
//       (<any>target)[key] = source[key];
//     }
//     return target as T & U;
//   }

//   static getFirstPointerId(evt: any) {
//     if (!evt.touches) {
//       // try to use pointer id or fake id
//       return evt.pointerId || 999;
//     } else {
//       return evt.changedTouches[0].identifier;
//     }
//   }
//   static releaseCanvas(...canvases: HTMLCanvasElement[]) {
//     // if (!releaseCanvasOnDestroy) return;

//     canvases.forEach((c) => {
//       c.width = 0;
//       c.height = 0;
//     });
//   }
//   static drawRoundedRectPath(
//     context: Context,
//     width: number,
//     height: number,
//     cornerRadius: number | number[]
//   ) {
//     let topLeft = 0;
//     let topRight = 0;
//     let bottomLeft = 0;
//     let bottomRight = 0;
//     if (typeof cornerRadius === 'number') {
//       topLeft =
//         topRight =
//         bottomLeft =
//         bottomRight =
//           Math.min(cornerRadius, width / 2, height / 2);
//     } else {
//       topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
//       topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
//       bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
//       bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
//     }
//     context.moveTo(topLeft, 0);
//     context.lineTo(width - topRight, 0);
//     context.arc(
//       width - topRight,
//       topRight,
//       topRight,
//       (Math.PI * 3) / 2,
//       0,
//       false
//     );
//     context.lineTo(width, height - bottomRight);
//     context.arc(
//       width - bottomRight,
//       height - bottomRight,
//       bottomRight,
//       0,
//       Math.PI / 2,
//       false
//     );
//     context.lineTo(bottomLeft, height);
//     context.arc(
//       bottomLeft,
//       height - bottomLeft,
//       bottomLeft,
//       Math.PI / 2,
//       Math.PI,
//       false
//     );
//     context.lineTo(0, topLeft);
//     context.arc(topLeft, topLeft, topLeft, Math.PI, (Math.PI * 3) / 2, false);
//   }
// };