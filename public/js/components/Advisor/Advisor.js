import Character from "../Character/Character";
class Advisor extends Character {
  advises;

  constructor(characterCast, advises) {
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
