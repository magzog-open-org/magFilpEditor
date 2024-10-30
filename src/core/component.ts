import { Block } from "./block";
import { IDrawable } from "./drawable";
import { Group } from "./group";

export type TComponent = (Group | Block) & IDrawable;