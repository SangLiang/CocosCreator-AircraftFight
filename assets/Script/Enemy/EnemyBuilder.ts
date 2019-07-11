import Enemy from "./Enemy";
const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyBuilder extends cc.Component {
    @property(cc.Prefab)
    enemy:cc.Node = null;

    private timer:number = 2.2;
    buildAircraft(){
        var enemy:cc.Node = cc.instantiate(this.enemy);
        enemy.setParent(cc.find('Canvas'));
        enemy.setPosition(this.node.position);
    }

    start () {
        this.schedule(function() {
            this.buildAircraft();
        }, this.timer);
    }
    
}
