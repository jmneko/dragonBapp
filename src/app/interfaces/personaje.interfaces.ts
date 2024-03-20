import { Planeta } from "./planeta.interfaces";

export interface Personaje {
  id: number,
  name: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  description: string,
  image: string,
  affiliation: string,
  deletedAt?: null,
  originPlanet: Planeta[];
}
