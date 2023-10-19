import { type CharacterData } from "../../types.js";

abstract class Character {
  protected isAlive: boolean;
  protected series: string;
  private readonly characterCast;

  constructor(characterCast: CharacterData) {
    this.characterCast = characterCast;
  }

  protected communicate() {
    return `${this.characterCast.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
