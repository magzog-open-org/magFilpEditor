import { DrawableConfig, IDrawableConfig } from "./drawableConfig";

export interface IGroupConfig extends IDrawableConfig { }

export class GroupConfig<T> extends DrawableConfig<T> implements IGroupConfig {
  constructor(config?: IGroupConfig) {
    super(config);
  }
}
