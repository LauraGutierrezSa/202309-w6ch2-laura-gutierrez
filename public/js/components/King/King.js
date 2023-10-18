import Character from "../Character/Character";
class King extends Character {
  yearsOfReign;
  constructor(data, yearsOfReign) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }
  communicate() {
    return `${super.communicate()}Everybody will die`;
  }
}
export default King;
//# sourceMappingURL=King.js.map
