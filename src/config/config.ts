export interface IConfig {
  // setConfig(config: any): void;
  updateConfig<T>(config: Partial<T>): void;
}
export abstract class Config<T> implements IConfig {
  // abstract setConfig(config: any): void;
  updateConfig<T>(config: Partial<T>): void {
    for (const key in config) {
      if (config[key as keyof T] 
        && typeof config[key as keyof T] === 'object' 
        && !Array.isArray(config[key as keyof T])
      ) {
        (this as any)[key] = {
          ...(this as any)[key],
          ...config[key as keyof T],
        } as any;
      } else {
        (this as any)[key] = config[key as keyof T] as any;
      }
    }
  }
}
