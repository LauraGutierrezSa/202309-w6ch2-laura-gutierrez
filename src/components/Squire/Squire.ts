import Character from "../Character/Character";
import Fighter from "../Fighter/Fighter";
import type { CharacterCast } from "../characterInterfaces/CharacterCast";

export class Squire extends Character {
  assKissingLevel: number;
  serves: string;

  constructor(
    characterCast: CharacterCast,
    assKissingLevel: number,
    serves: Fighter,
  ) {
    super(characterCast);
    this.assKissingLevel = this.assKissingFilter(assKissingLevel);

    if (!(serves instanceof Fighter)) {
      throw new Error("A squire can only serve a Fighter.");
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
