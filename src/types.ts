import type Character from "./components/Character/Character.js";
import type Fighter from "./components/Fighter/Fighter.js";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSrc: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface AdvisorData extends CharacterData {
  advises: Character;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface SquireData extends CharacterData {
  kissAssLevel: number;
  serves: Fighter;
}
