import { IBlockConfig } from "src/config/blockConfig";
import { Base } from "./base";

export abstract class Block extends Base {
  constructor(config?: IBlockConfig) {
    super();
  }
}

