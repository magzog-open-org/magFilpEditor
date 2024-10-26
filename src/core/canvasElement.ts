export class CanvasElement {
  element: HTMLCanvasElement;

  constructor(canvasElement: HTMLCanvasElement) {
    this.element = canvasElement;
  }

  get width(): number { return this.element.width; }
  set width(value: number) { this.element.width = value; }
  get height(): number { return this.element.height; }
  set height(value: number) { this.element.height = value; }
}