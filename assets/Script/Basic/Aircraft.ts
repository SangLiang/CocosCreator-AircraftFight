const {ccclass, property} = cc._decorator;
const AIRCRAFT_TYPE =  cc.Enum({HERO : 1, ENEMY : 2})

@ccclass
export default class Aircraft extends cc.Component {

    @property(cc.Prefab)
    exploreNode:cc.Prefab = null;

    protected HP:number = 1;

    explore(){
        if(!this.exploreNode ) return;
        let _node =  cc.instantiate(this.exploreNode);
        _node.setParent(cc.find('Canvas'));
        _node.setPosition(this.node.position);
    }

    underAttack(){
        this.HP -= 1;
        if(this.HP <= 0){
            this.explore();
            this.node.destroy();
        }
    }
   
}
