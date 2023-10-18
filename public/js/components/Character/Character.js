class Character {
  isAlive;
  series;
  characterCast;

  constructor(characterCast) {
    this.characterCast = characterCast;
  }

  communicate() {
    return `${this.characterCast.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
