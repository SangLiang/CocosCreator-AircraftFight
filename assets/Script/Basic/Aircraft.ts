const {ccclass, property} = cc._decorator;
const AIRCRAFT_TYPE =  cc.Enum({HERO : 1, ENEMY : 2})

@ccclass
export default class Aircraft extends cc.Component {

    @property({
        type:AIRCRAFT_TYPE
    })
    enumVa = AIRCRAFT_TYPE.HERO

    protected HP:number = 1;

    underAttack(){
        this.HP -= 1;
        if(this.HP <= 0){
            this.node.destroy();
        }
    }
   
}
