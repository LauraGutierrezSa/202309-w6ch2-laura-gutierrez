import Character from "../Character/Character";
import Fighter from "../Fighter/Fighter";
import { type CharacterData } from "../../types";

export class Squire extends Character {
  assKissingLevel: number;
  serves;

  constructor(
    characterData: CharacterData,
    assKissingLevel: number,
    this.serves = characterData.serves
  ) {
    super(characterData);
    this.assKissingLevel = this.assKissingFilter(assKissingLevel);

    if (!(serves instanceof Fighter)) {
      throw new Error("A squire can only serve a Fighter.");
    }

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate() {
    return `${super.communicate()} I'm a loser :(`;
  }

  private assKissingFilter(assKissingLevel: number) {
    if (assKissingLevel < 0) {
      return 0;
    }

    if (assKissingLevel > 10) {
      return 10;
    }

    return assKissingLevel;
  }
}
