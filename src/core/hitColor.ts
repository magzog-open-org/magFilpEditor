import { Canvas } from "./canvas";

export class HitColor {
  private static nextHitColor:number = 0;
  static getNextHitColor(){
    let hexStr = (++HitColor.nextHitColor).toString(16)
    while (hexStr.length < 6) { hexStr = '0' + hexStr; }
    return '#' + hexStr;
  }
}