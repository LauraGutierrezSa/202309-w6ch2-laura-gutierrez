import Character from "../Character/Character";
import type { CharacterData } from "../../types.js";

export class Fighter extends Character {
  weapon: string;
  skills: number;

  constructor(data: CharacterData, weapon: string, skills: number) {
    super(data);
    this.weapon = weapon;
    this.skills = this.filterSkills(skills);
  }

  communicate() {
    return `${super.communicate()} First, I hit. Then I ask.`;
  }

  private filterSkills(skills: number) {
    if (skills < 0) {
      return 0;
    }

    if (skills > 10) {
      return 10;
    }

    return skills;
  }
}

export default Fighter;
