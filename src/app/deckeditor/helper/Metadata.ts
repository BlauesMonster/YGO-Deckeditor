import { Ruling } from "./Ruling";
import { Category } from "./Category";

export interface Metadata {
  ruling: Ruling[];
  category: Category[];
  setcode: string[];
  strs: string[];
  alias?: number;
}
