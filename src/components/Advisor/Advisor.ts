import Character from "../Character/Character";
import type { CharacterCast } from "../characterInterfaces/CharacterCast";

class Advisor extends Character {
  advises;

  constructor(characterCast: CharacterCast, advises: Character) {
    super(characterCast);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()} I have the feeling that I'm gonna die soon...`;
  }
}

export default Advisor;
