import { Group } from "./core/group";
import { Layer } from "./core/layer";

export class LayerManager {
  private layers: Layer[] = [];

  add(layer: Layer): void {
    this.layers.push(layer);
  }

  remove(layer: Layer): void {
    const index = this.layers.indexOf(layer);
    if (index > -1) {
      this.layers.splice(index, 1);
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    this.layers.forEach((layer) => layer.draw(context));
  }
}