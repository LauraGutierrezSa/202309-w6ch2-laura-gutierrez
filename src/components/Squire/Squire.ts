import Character from "../Character/Character.js";
import Fighter from "../Fighter/Fighter.js";
import type { SquireData } from "../../types.js";
export class Squire extends Character {
  assKissingLevel;
  serves;

  constructor(data: SquireData) {
    super(data);
    this.assKissingLevel = this.assKissingFilter(data.assKissingLevel);

    if (data.serves instanceof Fighter) {
      this.serves = data.serves;
    }

    if (!(this.serves instanceof Fighter)) {
      throw new Error("A squire can only serve a Fighter.");
    }
  }

  communicate() {
    return `${super.communicate()} I'm a loser :(`;
  }

  private assKissingFilter(assKissingLevel: number): number {
    if (assKissingLevel < 0) {
      return 0;
    }

    if (assKissingLevel > 10) {
      return 10;
    }

    return assKissingLevel;
  }
}
