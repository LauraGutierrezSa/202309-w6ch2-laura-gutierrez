import Character from "../Character/Character";
import type { CharacterData } from "../../types.js";

class Advisor extends Character {
  advises;

  constructor(characterCast: CharacterData, advises: Character) {
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
