import Character from "../Character/Character";
import Fighter from "../Fighter/Fighter";
export class Squire extends Character {
  assKissingLevel;
  serves;
  constructor(characterCast, assKissingLevel, serves) {
    super(characterCast);
    this.assKissingLevel = this.assKissingFilter(assKissingLevel);
    if (!(serves instanceof Fighter)) {
      throw new Error("A squire can only serve a Fighter.");
    }
  }
  communicate() {
    return `${super.communicate()} I'm a loser :(`;
  }
  assKissingFilter(assKissingLevel) {
    if (assKissingLevel < 0) {
      return 0;
    }
    if (assKissingLevel > 10) {
      return 10;
    }
    return assKissingLevel;
  }
}
//# sourceMappingURL=Squire.js.map
