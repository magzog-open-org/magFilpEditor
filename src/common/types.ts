export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export enum BorderStyle {
  SOLID = "solid",
  DASHED = "dashed",
}

export type AlignVertical = 'top' | 'middle' | 'bottom';
export type AlignHorizontal = 'left' | 'center' | 'right';
