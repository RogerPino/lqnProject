import { TFilmConnection } from "./TFilmConnection";
import { THomeWorld } from "./THomeWorld";

export type TAllPeople = {
  name: string;
  birthYear: string;
  gender: string;
  height: number;
  mass: string;
  hairColor: string;
  skinColor: string;
  homeworld: THomeWorld[];
  filmConnection: TFilmConnection;
};
