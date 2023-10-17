export interface CharacterCast {
  name: string;
  family: string;
  age: number;
  imageSrc: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}
