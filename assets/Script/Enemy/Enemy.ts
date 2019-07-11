
const {ccclass, property} = cc._decorator;
import Aircraft from '../Basic/Aircraft'

@ccclass
export default class Enemy extends Aircraft {

    @property
    private speed:number = 100;

    scoreLabel:cc.Node = null;

    onLoad () {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.scoreLabel = cc.find('Canvas/ScoreManager/Score');
    }

    onCollisionEnter(other, self) {
        this.addScore();
        this.underAttack();
    }

    addScore(){
        var _label = this.scoreLabel.getComponent(cc.Label);
        _label.string =  (parseInt(_label.string ) +10).toString();
    }

    move(dt){
        this.node.y -= this.speed * dt;
        if(this.node.y < -788){
            this.node.destroy();
        }
    }

    update(dt){
        this.move(dt);
    }

}
