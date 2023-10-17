import Character from "../Character/Character";
import type { CharacterCast } from "../characterInterfaces/CharacterCast.js";

class King extends Character {
  yearsOfReign;

  constructor(data: CharacterCast, yearsOfReign: number) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }

  protected communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
