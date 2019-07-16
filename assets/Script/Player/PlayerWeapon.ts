import Weapon from "../Basic/Weapon";
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerWeapon extends Weapon {

  constructor(){
      super();
      this.buildTime = 0.25;

  }
}
