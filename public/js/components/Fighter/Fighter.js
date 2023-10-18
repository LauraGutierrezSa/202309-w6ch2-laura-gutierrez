import Character from "../Character/Character";
export class Fighter extends Character {
  weapon;
  skills;

  constructor(data, weapon, skills) {
    super(data);
    this.weapon = weapon;
    this.skills = this.filterSkills(skills);
  }

  communicate() {
    return `${super.communicate()} First, I hit. Then I ask.`;
  }

  filterSkills(skills) {
    if (skills < 0) {
      return 0;
    }

    if (skills > 10) {
      return 10;
    }

    return skills;
  }
}
