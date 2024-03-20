import { Personaje } from "./personaje.interfaces";

export interface Planeta {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt?: null;
  characters: Personaje[];
}
